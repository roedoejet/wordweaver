import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from "@angular/core";
import { VerbService, selectSettingsLanguage } from "../../../core/core.module";
import { Verb, META } from "../../../../config/config";
import { Subject, ReplaySubject } from "rxjs";
import { debounceTime, tap, takeUntil, shareReplay } from "rxjs/operators";
import { sortBy } from "lodash";
import { Store, select } from "@ngrx/store";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { State } from "../../../core/wordmaker-selection/wordmaker-selection.model";
import {
  fadeAnimation,
  listAnimation
} from "../../../core/animations/value.animations";
import { actionChangeVerb } from "../../../core/wordmaker-selection/wordmaker-selection.actions";

@Component({
  selector: "ww-wordmaker-verb-step",
  templateUrl: "./wordmaker-verb-step.component.html",
  styleUrls: ["./wordmaker-verb-step.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation, listAnimation]
})
export class WordmakerVerbStepComponent implements OnDestroy, OnInit {
  viewableVerbs$ = new ReplaySubject<Verb[]>();
  loading;
  language = "ww.language";
  searchField: FormControl;
  verbForm: FormGroup;
  unsubscribe$ = new Subject<void>();
  lang$ = this.store.pipe(
    takeUntil(this.unsubscribe$),
    select(selectSettingsLanguage)
  );
  @Output() selectedVerb = new EventEmitter<Verb>();
  constructor(
    private verbService: VerbService,
    private fb: FormBuilder,
    private store: Store<State>
  ) {
    // subscribe to search input
    this.searchField = new FormControl();
    this.verbForm = this.fb.group({ search: this.searchField });
  }

  ngOnInit(): void {
    this.verbService.verbs$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(x => this.viewableVerbs$.next(x));
    this.searchField.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        debounceTime(200),
        tap(term => this.viewableVerbs$.next(this.getEntriesFrom(term)))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getEntriesFrom(term) {
    return this.verbService.verbs.filter(v => this.filterEntries(v, term));
  }

  filterEntries(v, term) {
    return META.languages.some(
      lang =>
        lang.value in v &&
        v[lang.value].toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  }

  onVerbSelect(verb) {
    // Update store
    this.store.dispatch(actionChangeVerb({ root: verb }));
    // Update parent component
    this.selectedVerb.emit(verb);
  }

  sortVerbs(verbs) {
    return sortBy(verbs, ["gloss"]);
  }
}
