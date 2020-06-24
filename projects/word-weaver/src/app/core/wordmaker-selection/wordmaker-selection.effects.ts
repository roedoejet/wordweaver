import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { marker } from "@biesbjerg/ngx-translate-extract-marker";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { tap, withLatestFrom } from "rxjs/operators";
import { selectWordmakerState } from "../core.state";
import { LocalStorageService } from "../local-storage/local-storage.service";
import { NotificationService } from "../notifications/notification.service";
import { OptionService } from "../option/option.service";
import { PronounService } from "../pronoun/pronoun.service";
import { ValidationService } from "../validation/validation.service";
import { VerbService } from "../verb/verb.service";
import {
  actionChangeAgent,
  actionChangeOption,
  actionChangePatient,
  actionChangeStep,
  actionChangeVerb
} from "./wordmaker-selection.actions";
import { State } from "./wordmaker-selection.model";

export const WORDMAKER_SELECTION_KEY = "WORDMAKER";

export function createRequestQueryArgs(selection) {
  const params = new URLSearchParams();
  ["option", "agent", "patient", "root"].forEach(x => {
    if (selection[x]) {
      params.append(x, selection[x].tag);
    }
  });
  return params;
}

export function randomX(x) {
  return x[Math.floor(Math.random() * (x.length - 1) + 1)];
}

@Injectable()
export class WordmakerEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private localStorageService: LocalStorageService,
    private http: HttpClient,
    private notificationService: NotificationService,
    private verbService: VerbService,
    private optionService: OptionService,
    private pronounService: PronounService,
    private validationService: ValidationService
  ) {}

  // TODO: persist
  // persistSelection = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(
  //         actionChangeAgents,
  //         actionChangeOptions,
  //         actionChangeVerbs,
  //         actionChangePatients
  //       ),
  //       withLatestFrom(this.store.pipe(select(selectWordmakerState))),
  //       tap(([action, settings]) =>
  //         this.localStorageService.setItem(WORDMAKER_SELECTION_KEY, settings)
  //       )
  //     ),
  //   { dispatch: false }
  // );

  changeStep = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionChangeStep),
        withLatestFrom(this.store.pipe(select(selectWordmakerState))),
        tap(([action, selection]) => {
          switch (selection.step) {
            // Verb Selection Step
            case 0: {
              // Reset following choices
              this.store.dispatch(actionChangeAgent({ agent: null }));
              this.store.dispatch(actionChangePatient({ patient: null }));
              this.store.dispatch(actionChangeOption({ option: null }));
              break;
            }
            // Pronoun Selection Step
            case 1: {
              // Notify random selection
              if (!selection.root) {
                const random = randomX(this.verbService.verbs);
                this.store.dispatch(actionChangeVerb({ root: random }));
                this.notificationService.translated(
                  marker("ww.pages.wordmaker.notifications.random.verb"),
                  { value: random.gloss },
                  "success"
                );
              }
              // Reset following choice
              this.store.dispatch(actionChangeOption({ option: null }));
              break;
            }
            // Temp Selection Step
            case 2: {
              // Notify random selection
              const pronoun = {
                agent: selection.agent,
                patient: selection.patient
              };
              // console.log("agent selection:");
              // console.log(
              //   this.validationService.validate(
              //     "validation",
              //     "selection",
              //     "agents",
              //     selection
              //   )
              // );
              // console.log("agent display:");
              // console.log(
              //   this.validationService.validate(
              //     "display",
              //     "categories",
              //     "agents",
              //     selection
              //   )
              // );
              // console.log("patient selection:");
              // console.log(
              //   this.validationService.validate(
              //     "validation",
              //     "selection",
              //     "patients",
              //     selection
              //   )
              // );
              // console.log("patient display:");
              // console.log(
              //   this.validationService.validate(
              //     "validation",
              //     "selection",
              //     "patients",
              //     selection
              //   )
              // );
              if (
                !this.validationService.validate(
                  "validation",
                  "selection",
                  "agents",
                  selection
                ) &&
                this.validationService.validate(
                  "display",
                  "categories",
                  "agents",
                  selection
                )
              ) {
                if (!selection.agent) {
                  const randomAgent = randomX(this.pronounService.pronouns);
                  this.store.dispatch(
                    actionChangeAgent({ agent: randomAgent })
                  );
                  pronoun.agent = randomAgent;
                }
              }
              if (
                !this.validationService.validate(
                  "validation",
                  "selection",
                  "patients",
                  selection
                ) &&
                this.validationService.validate(
                  "display",
                  "categories",
                  "patients",
                  selection
                )
              ) {
                if (!selection.patient) {
                  const randomPatient = randomX(this.pronounService.pronouns);
                  this.store.dispatch(
                    actionChangePatient({ patient: randomPatient })
                  );
                  pronoun.patient = randomPatient;
                }
              }
              if (pronoun.agent && pronoun.patient) {
                this.notificationService.translated(
                  marker(
                    "ww.pages.wordmaker.notifications.random.pers.transitive"
                  ),
                  {
                    agent: pronoun.agent.gloss,
                    patient: pronoun.patient.gloss
                  },
                  "success"
                );
              } else if (pronoun.agent) {
                this.notificationService.translated(
                  marker(
                    "ww.pages.wordmaker.notifications.random.pers.intransitive"
                  ),
                  { value: pronoun.agent.gloss },
                  "success"
                );
              } else if (pronoun.patient) {
                this.notificationService.translated(
                  marker(
                    "ww.pages.wordmaker.notifications.random.pers.intransitive"
                  ),
                  { value: pronoun.patient.gloss },
                  "success"
                );
              }
              break;
            }
            case 3: {
              // Notify random selection
              if (!selection.option) {
                const random = randomX(this.optionService.options);
                this.store.dispatch(actionChangeOption({ option: random }));
                this.notificationService.translated(
                  marker("ww.pages.wordmaker.notifications.random.temp"),
                  { value: random.gloss },
                  "success"
                );
              }
            }
          }
        })
      ),
    { dispatch: false }
  );

  // conjugate = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(actionConjugationEvent),
  //       withLatestFrom(this.store.pipe(select(selectWordmakerState))),
  //       tap(([action, selection]) => {
  //         const queryArgs = createRequestQueryArgs(selection);
  //         if (queryArgs) {
  //           this.store.dispatch(actionChangeLoading({ loading: true }));
  //           this.store
  //             .pipe(
  //               select(selectSettingsState),
  //               switchMap(settings =>
  //                 this.http
  //                   .get(
  //                     settings.baseUrl + "conjugations?" + queryArgs.toString()
  //                   )
  //                   .pipe(catchError(err => of(err)))
  //               )
  //             )
  //             .subscribe(conj => {
  //               this.store.dispatch(actionChangeLoading({ loading: false }));
  //               this.store.dispatch(
  //                 actionChangeConjugations({ conjugations: conj })
  //               );
  //             });
  //         }
  //       })
  //     ),
  //   { dispatch: false }
  // );
}
