import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Verb } from "../../../models/models";
import { VerbService } from "../../../core/core.module";
import { TableviewerSelectionService } from "../../../core/core.module";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  debounceTime,
  map,
  tap,
  distinctUntilChanged,
  skipWhile
} from "rxjs/operators";

import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

import { actionChangeVerbs } from "../../../core/tableviewer-selection/tableviewer-selection.actions";
import {
  TableviewerState,
  State
} from "../../../core/tableviewer-selection/tableviewer-selection.model";
import { selectTableviewer } from "../../../core/tableviewer-selection/tableviewer-selection.selectors";

@Component({
  selector: "ww-tableviewer-verb-panel",
  templateUrl: "./tableviewer-verb-panel.component.html",
  styleUrls: ["./tableviewer-verb-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableviewerVerbPanelComponent implements OnInit {
  verbs$: Observable<Verb[]> = this.verbService.verbs$;
  checkboxGroup: FormGroup = new FormGroup({});
  viewableVerbs$: Observable<Verb[]>;
  selection$: Observable<TableviewerState>;
  searchField: FormControl;
  verbForm: FormGroup;
  constructor(
    public verbService: VerbService,
    private fb: FormBuilder,
    public selectionService: TableviewerSelectionService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.searchField = new FormControl();
    this.verbForm = this.fb.group({ search: this.searchField });
    // Get Verbs
    this.verbs$
      .pipe(
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
              map(checkboxes =>
                Object.keys(checkboxes).filter(k => checkboxes[k])
              ),
              tap(selectedVerbs => this.onVerbSelect(selectedVerbs))
            )
            .subscribe()
        )
      )
      .subscribe(x => {
        // change viewable verbs
        this.viewableVerbs$ = this.searchField.valueChanges.pipe(
          debounceTime(200),
          map(term => this.getEntriesFrom(term))
        );
      });
    // populate with store's selection
    this.selection$ = this.store.pipe(select(selectTableviewer));
  }

  onVerbSelect(verbs) {
    this.store.dispatch(actionChangeVerbs({ root: verbs }));
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
