import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Input,
  ViewChild
} from "@angular/core";
import { VerbService } from "../../../core/core.module";
import { Verb } from "../../../models/models";
import { EMPTY, fromEvent, from, Observable, Subject, of } from "rxjs";
import {
  concatMap,
  debounceTime,
  tap,
  map,
  merge,
  mergeMap,
  switchMap,
  takeUntil
} from "rxjs/operators";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import * as anime from "animejs";
import { sortBy } from "lodash";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import {
  fadeAnimation,
  listAnimation
} from "../../../core/animations/value.animations";

@Component({
  selector: "ww-wordmaker-verb-step",
  templateUrl: "./wordmaker-verb-step.component.html",
  styleUrls: ["./wordmaker-verb-step.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation, listAnimation]
})
export class WordmakerVerbStepComponent implements OnInit {
  viewableVerbs$ = new Subject<Verb[]>();
  search$: Observable<any>;
  verbs;
  loading;
  language = "ww.language";
  display_language = "english";
  searchField: FormControl;
  verbForm: FormGroup;
  explorer_click$: Observable<any>;
  cached_clicked_verbs$: Observable<any> = of([]);
  notifier: Observable<any>;
  @Output() selectedVerb = new EventEmitter<Verb>();
  @Output() goBackTrigger = new EventEmitter();
  constructor(private verbService: VerbService, private fb: FormBuilder) {
    // subscribe to search input
    this.searchField = new FormControl();
    this.verbForm = this.fb.group({ search: this.searchField });
  }

  ngOnInit(): void {
    this.verbService.verbs$.subscribe(x => this.viewableVerbs$.next(x));
    this.searchField.valueChanges
      .pipe(
        tap(x => console.log(x)),
        debounceTime(200),
        tap(term => this.viewableVerbs$.next(this.filterEntries(term)))
      )
      .subscribe();
  }

  filterEntries(term) {
    return this.verbService.verbs.filter(
      v =>
        v.gloss.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
        v.tag.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  }

  goBack() {
    this.goBackTrigger.emit();
  }

  select(verb) {
    this.selectedVerb.emit(verb);
  }

  sortVerbs(verbs) {
    if (this.display_language === "english") {
      return sortBy(verbs, ["gloss"]);
    } else {
      return sortBy(verbs, ["display"]);
    }
  }
}
