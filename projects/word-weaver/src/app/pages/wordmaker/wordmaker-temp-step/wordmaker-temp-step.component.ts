import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy
} from "@angular/core";
import { AffOption, Pronoun, Verb } from "../../../models/models";
import {
  AffixService,
  ConjugationService,
  WordmakerSelectionService
} from "../../../core/core.module";
import { Observable, empty, EMPTY } from "rxjs";
import { distinctUntilChanged, map, switchMap } from "rxjs/operators";
import { select } from "@ngrx/store";

@Component({
  selector: "ww-wordmaker-temp-step",
  templateUrl: "./wordmaker-temp-step.component.html",
  styleUrls: ["./wordmaker-temp-step.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordmakerTempStepComponent implements OnInit {
  temps$: Observable<any>;
  @Input() selectedVerb: Verb;
  @Input() selectedPers: any;
  @Output() selectedTemp = new EventEmitter<AffOption>();
  constructor(
    private affixService: AffixService,
    private conjugationService: ConjugationService,
    private selectionService: WordmakerSelectionService
  ) {}

  ngOnInit(): void {
    this.temps$ = this.selectionService.selection$.pipe(
      switchMap(selection => {
        if (
          selection.root &&
          ((selection.root.thematic_relation === "purple" &&
            selection.agent &&
            selection.patient) ||
            (selection.root.thematic_relation === "red" && selection.agent) ||
            (selection.root.thematic_relation === "blue" && selection.patient))
        ) {
          const args = Object.entries(selection).reduce(
            (a, [k, v]) => (v == null ? a : { ...a, [k]: [v.tag] }),
            {}
          );
          args["aff-option"] = [];
          return this.conjugationService.conjugate(args);
        } else {
          return EMPTY;
        }
      })
    );
  }

  onChipClick(tag) {
    this.returnAffoptFromTag$(tag).subscribe(t => {
      this.selectedTemp.emit(t);
    });
  }

  returnAffoptFromTag$(tag) {
    return this.affixService.affoptions$.pipe(
      map(affopts => {
        const picked_ao = affopts.filter(ao => ao["tag"] === tag)[0];
        return picked_ao;
      })
    );
  }

  returnAffoptFromGloss$(gloss) {
    return this.affixService.affoptions$.pipe(
      map(affopts => {
        const picked_ao = affopts.filter(ao => ao["gloss"] === gloss)[0];
        return picked_ao;
      })
    );
  }
}
