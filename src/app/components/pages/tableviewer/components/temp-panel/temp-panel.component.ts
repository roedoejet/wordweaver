import { Component, OnInit } from '@angular/core';
import { AffixService, SelectionService } from '../../../../../services'
import { AffOption } from '../../../../../models'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { FormControl, FormGroup} from "@angular/forms"

@Component({
  selector: 'temp-panel',
  templateUrl: './temp-panel.component.html',
  styleUrls: ['./temp-panel.component.scss',
   '../../tableviewer.scss']
})
export class TempPanel implements OnInit {
  checkboxGroup: FormGroup = new FormGroup({});
  checkboxPossibleValues: Observable<AffOption[]> = this.affixService.affoptions$.pipe(
    map(values => {
    values.forEach(value => { this.checkboxGroup.addControl(value['tag'], new FormControl(this.checkedValues.indexOf(value['tag']) !== -1)) }); return values
  }))
  checkedValues: string[] = []
  chosenTimes = [];
  selectAll = false;
  constructor(private affixService: AffixService, private selectionService: SelectionService) {
    this.checkboxGroup.valueChanges.subscribe(c => { c = this.filterTrue(c); if (c) { this.pushChanges(c) } })
  }

  ngOnInit() {

  }

  pushChanges(c) {
    this.selectionService.updateAffOptions(c)
  }

  filterTrue(c) {
    return Object.keys(c)
      .filter(k => { return c[k] })
  }

  toggleSelectAll() {
    this.selectAll = !this.selectAll
    this.checkboxPossibleValues.subscribe(ts => { ts.forEach(t => this.checkboxGroup.controls[t.tag].setValue(this.selectAll)) })
  }

}
