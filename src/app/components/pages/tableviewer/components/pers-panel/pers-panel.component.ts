import { Component, OnInit } from '@angular/core';
import { PronounService, SelectionService } from '../../../../../services'
import { Pronoun } from '../../../../../models'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms"
import { group, keyframes, trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'pers-panel',
  templateUrl: './pers-panel.component.html',
  styleUrls: ['./pers-panel.component.scss',
    '../../tableviewer.scss'],
})
export class PersPanel implements OnInit {
  agCheckboxGroup: FormGroup = new FormGroup({});
  agCheckboxPossibleValues: Observable<Pronoun[]> = this.pnService.pronouns$.pipe(
    map(values => {
      values.forEach(value => { this.agCheckboxGroup.addControl(value['tag'], new FormControl(this.agCheckedValues.indexOf(value['tag']) !== -1)) }); return values
    })
  )
  agCheckedValues: string[] = []
  patCheckboxGroup: FormGroup = new FormGroup({});
  patCheckboxPossibleValues: Observable<Pronoun[]> = this.pnService.pronouns$.pipe(
    map(values => {
      values.forEach(value => { this.patCheckboxGroup.addControl(value['tag'], new FormControl(this.patCheckedValues.indexOf(value['tag']) !== -1)) }); return values
    })
  )
  patCheckedValues: string[] = []
  chosenPro;
  role = 'patient';
  limit: number = 8;
  selectAllAg = false;
  selectAllPat = false;
  constructor(private pnService: PronounService, private selectionService: SelectionService) {
    this.agCheckboxGroup.valueChanges.subscribe(c => { c = this.filterTrue(c); if (c) { this.pushAgChanges(c) } })
    this.patCheckboxGroup.valueChanges.subscribe(c => { c = this.filterTrue(c); if (c) { this.pushPatChanges(c) } })
  }

  pushAgChanges(c) {
    this.selectionService.updateAgents(c)
  }

  pushPatChanges(c) {
    this.selectionService.updatePatients(c)
  }

  filterTrue(c) {
    return Object.keys(c)
      .filter(k => { return c[k] })
  }

  ngOnInit() {

  }

  toggleSelectAll() {
    if (this.role === 'agent') {
      this.selectAllAg = !this.selectAllAg
      this.agCheckboxPossibleValues.subscribe(pns => { pns.forEach(pn => this.agCheckboxGroup.controls[pn.tag].setValue(this.selectAllAg)) })
    } else if (this.role === 'patient') {
      this.selectAllPat = !this.selectAllPat
      this.patCheckboxPossibleValues.subscribe(pns => { pns.forEach(pn => this.patCheckboxGroup.controls[pn.tag].setValue(this.selectAllPat)) })
    }
  }

  checkRole() {
    console.log(this.role)
  }

}
