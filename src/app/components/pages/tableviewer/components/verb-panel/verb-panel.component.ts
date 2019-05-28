import { Component, OnInit } from '@angular/core';
import { Verb } from '../../../../../models'
import { SelectionService, SettingsService, VerbService } from '../../../../../services';
import { Observable, Subject } from 'rxjs'
import { debounceTime, map } from 'rxjs/operators'


import { FormBuilder, FormControl, FormGroup } from "@angular/forms"

@Component({
  selector: 'verb-panel',
  templateUrl: './verb-panel.component.html',
  styleUrls: ['./verb-panel.component.scss',
    '../../tableviewer.scss']
})
export class VerbPanel implements OnInit {
  // verbFormControl = new FormControl('', []);
  verbs$: Observable<Verb[]> = this.verbService.verbs$;
  checkboxGroup: FormGroup = new FormGroup({});
  checkboxPossibleValues: Observable<Verb[]>;
  checkedValues: string[] = []
  settings;
  increment = 1000;
  bottomLimit = 0;
  topLimit: number
  viewableVerbs: Verb[];
  selection = [];
  searchField: FormControl;
  verbForm: FormGroup;
  verbSubscription;
  constructor(private verbService: VerbService, private fb: FormBuilder, public selectionService: SelectionService, public settingsService: SettingsService) {
    // initialize form with list of checkboxes
    this.verbSubscription = this.verbs$.subscribe(values => {
      values.forEach(value => { this.checkboxGroup.addControl(value['tag'], new FormControl(this.checkedValues.indexOf(value['tag']) !== -1)) }); return values
    })

    // subscribe to search input
    this.searchField = new FormControl();
    this.verbForm = this.fb.group({ search: this.searchField })
    this.searchField.valueChanges.pipe(
      debounceTime(100),
      map(term => { return this.getEntriesFrom(term) })
    ).subscribe((result) => {
      this.viewableVerbs = result;
    })


    // create selection observable
    this.checkboxGroup.valueChanges.subscribe(c => { c = this.filterTrue(c); if (c) { this.pushChanges(c) } })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.verbSubscription.unsubscribe();
  }

  pushChanges(c) {
    this.selectionService.updateVerbs(c)
  }

  filterTrue(c) {
    return Object.keys(c)
      .filter(k => { return c[k] })
  }

  getEntriesFrom(term) {
    let vbs = this.verbService.verbs.filter(v => { return this.filterEntries(v, term) }
    ).slice(this.bottomLimit, this.increment)
    return vbs
  }

  filterEntries(v, term) {
    return (v.gloss.toLowerCase().indexOf(term.toLowerCase()) > -1 || v.tag.toLowerCase().indexOf(term.toLowerCase()) > -1)
  }


  swipePrev() {
    if (this.bottomLimit - this.increment > 0) {
      this.bottomLimit -= this.increment;
      // this.topLimit -= this.increment;
      // this.viewableVerbs = this.verbs.slice(this.bottomLimit, this.topLimit)
    } else {
      this.bottomLimit = 0;
      // this.topLimit = this.increment;
      // this.viewableVerbs = this.verbs.slice(this.bottomLimit, this.topLimit)
    }
  }

  swipeNext() {
    if (this.bottomLimit + this.increment < this.topLimit) {
      this.bottomLimit += this.increment;
      // this.topLimit += this.increment;
      // this.viewableVerbs = this.verbs.slice(this.bottomLimit, this.topLimit)
    } else {
      this.bottomLimit = this.topLimit - this.increment;
      // this.topLimit = this.verbs.length;
      // this.viewableVerbs = this.verbs.slice(this.bottomLimit, this.topLimit)
    }
  }

  remove(verb) {
    this.checkboxGroup.controls[verb].setValue(false)
  }

}
