import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";
import { Verb } from "../../../../config/config";
import { VerbService } from "../../../core/core.module";
import { Store, select } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import { debounceTime, map, tap, takeUntil, take } from "rxjs/operators";

import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

import { actionChangeVerbs } from "../../../core/tableviewer-selection/tableviewer-selection.actions";
import {
  TableviewerState,
  State
} from "../../../core/tableviewer-selection/tableviewer-selection.model";
import { selectTableViewerRoot } from "../../../core/tableviewer-selection/tableviewer-selection.selectors";

@Component({
  selector: "ww-tableviewer-verb-panel",
  templateUrl: "./tableviewer-verb-panel.component.html",
  styleUrls: ["./tableviewer-verb-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableviewerVerbPanelComponent implements OnDestroy, OnInit {
  verbs$: Observable<Verb[]> = this.verbService.verbs$;
  checkboxGroup: FormGroup = new FormGroup({});
  viewableVerbs$: Observable<Verb[]>;
  selection$: Observable<Verb[]>;
  searchField: FormControl;
  verbForm: FormGroup;
  unsubscribe$ = new Subject<void>();
  constructor(
    public verbService: VerbService,
    private fb: FormBuilder,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.searchField = new FormControl();
    this.verbForm = this.fb.group({ search: this.searchField });
    // Get Verbs
    this.verbs$
      .pipe(
        takeUntil(this.unsubscribe$),
        // Create checkbox group
        tap(verbs =>
          verbs.map(verb =>
            this.checkboxGroup.addControl(verb["tag"], new FormControl(false))
          )
        ),
        // Subscribe to checkbox valuechanges
        tap(x =>
          this.checkboxGroup.valueChanges
            .pipe(
              takeUntil(this.unsubscribe$),
              // Filter checked checkboxes
              map(checkboxes =>
                Object.keys(checkboxes).filter(k => checkboxes[k])
              ),
              // Convert tag to full Verb
              map(verbTags =>
                verbTags.map(verbTag => this.verbService.getVerb(verbTag))
              ),
              // Dispatch action to store
              tap(selectedVerbs => this.onVerbSelect(selectedVerbs))
            )
            .subscribe()
        )
      )
      .subscribe(x => {
        // change viewable verbs
        this.viewableVerbs$ = this.searchField.valueChanges.pipe(
          takeUntil(this.unsubscribe$),
          debounceTime(200),
          map(term => this.getEntriesFrom(term))
        );
      });
    // populate with store's selection
    this.selection$ = this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectTableViewerRoot)
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onVerbSelect(verbs) {
    this.store.dispatch(actionChangeVerbs({ root: verbs }));
  }

  selectedRoot(selection: Verb[], root: string) {
    return selection.map(x => x.tag).indexOf(root) > 0;
  }

  getEntriesFrom(term) {
    const vbs: Verb[] = this.verbService.verbs.filter(v => {
      return this.filterEntries(v, term);
    });
    return vbs;
  }

  filterEntries(v, term) {
    return (
      v.gloss.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
      v.tag.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  }
}
