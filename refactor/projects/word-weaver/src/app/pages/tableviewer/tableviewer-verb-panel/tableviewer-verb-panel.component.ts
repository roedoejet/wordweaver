import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Verb } from "../../../models/models";
import { VerbService } from "../../../core/core.module";
import { TableviewerSelectionService } from "../../../core/core.module";
import { Observable } from "rxjs";
import { debounceTime, map } from "rxjs/operators";

import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "ww-tableviewer-verb-panel",
  templateUrl: "./tableviewer-verb-panel.component.html",
  styleUrls: ["./tableviewer-verb-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableviewerVerbPanelComponent implements OnInit {
  verbs$: Observable<Verb[]> = this.verbService.verbs$;
  checkboxGroup: FormGroup = new FormGroup({});
  checkboxPossibleValues: Observable<Verb[]>;
  checkedValues: string[] = [];
  increment = 1000;
  bottomLimit = 0;
  topLimit: number;
  viewableVerbs$: Observable<Verb[]>;
  selection = [];
  searchField: FormControl;
  verbForm: FormGroup;
  constructor(
    public verbService: VerbService,
    private fb: FormBuilder,
    public selectionService: TableviewerSelectionService
  ) {
    // subscribe to search input
    this.searchField = new FormControl();
    this.verbForm = this.fb.group({ search: this.searchField });
    this.viewableVerbs$ = this.searchField.valueChanges.pipe(
      debounceTime(200),
      map(term => {
        // Find matches
        const matches = this.getEntriesFrom(term);
        // Add controls
        matches.forEach(value => {
          this.checkboxGroup.addControl(
            value["tag"],
            new FormControl(this.checkedValues.indexOf(value["tag"]) !== -1)
          );
        });
        // Return matches
        return matches;
      })
    );

    // TODO: Redux
    // create selection observable
    this.checkboxGroup.valueChanges.subscribe(c => {
      c = this.filterTrue(c);
      if (c) {
        this.pushChanges(c);
      }
    });
  }

  ngOnInit(): void {}

  // TODO: Redux
  pushChanges(c) {
    this.selectionService.updateVerbs(c);
  }

  // TODO: Redux
  filterTrue(c) {
    return Object.keys(c).filter(k => {
      return c[k];
    });
  }

  getEntriesFrom(term) {
    const vbs: Verb[] = this.verbService.verbs
      .filter(v => {
        return this.filterEntries(v, term);
      })
      .slice(this.bottomLimit, this.increment);
    return vbs;
  }

  filterEntries(v, term) {
    return (
      v.gloss.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
      v.tag.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  }

  remove() {
    Object.keys(this.checkboxGroup.controls).forEach(k =>
      this.checkboxGroup.controls[k].setValue(false)
    );
  }
}
