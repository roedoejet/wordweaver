import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PronounService, ChartService } from '../../../../../services';
import { Pronoun, Settings, Verb } from '../../../../../models'
import { MetaData } from '../../../../../global'
import { Observable } from 'rxjs';
import { EChartOption } from 'echarts';


@Component({
  selector: 'wordmaker-pers-panel',
  templateUrl: './wordmaker-pers-panel.component.html',
  styleUrls: ['./wordmaker-pers-panel.component.scss']
})
export class WordmakerPersPanel implements OnInit {
  @Input() selectedVerb: Verb;
  language = MetaData.language
  pronouns$: Observable<Pronoun[]>
  @Output() selectedPers = new EventEmitter<any>();
  @Output() goBackTrigger = new EventEmitter();
  selectedAgent: string;
  selectedPatient: string;
  pro_chart$: Observable<EChartOption>
  constructor(private pronounService: PronounService, private chartService: ChartService) {

  }

  ngOnInit() {
    this.pronouns$ = this.pronounService.pronouns$
    if (this.selectedVerb.thematic_relation === 'purple') {
      this.pro_chart$ = this.chartService.returnAllProCombinations()
    } else {
      this.pro_chart$ = this.chartService.returnChoiceAllData('pronouns', undefined, 1)
    }
  }

  goBack(){
    this.goBackTrigger.emit()
  }


  onChartClick(ev) {
    let term = ev['data']['name']
    // if not final, select agent/tr, remove other selections
    if (ev['data']['children']) {
      this.pronounService.pronouns$.subscribe(pns => {
        let pn = pns.filter(pn => pn.gloss === term)[0];
        this.select('ag', pn, true)
      })
    } else {
      // if red, select agent/intr
      if (this.selectedVerb.thematic_relation === 'red') {
        this.pronounService.pronouns$.subscribe(pns => {
          let pn = pns.filter(pn => pn.gloss === term)[0];
          this.select('ag', pn, false)
        })
      } else
        // if blue, select patient/intr
        if (this.selectedVerb.thematic_relation === 'blue') {
          this.pronounService.pronouns$.subscribe(pns => {
            let pn = pns.filter(pn => pn.gloss === term)[0];
            this.select('pat', pn, false)
          })
        } else
          // if purple, select patient/tr
          if (this.selectedVerb.thematic_relation === 'purple') {
            this.pronounService.pronouns$.subscribe(pns => {
              let pn = pns.filter(pn => pn.gloss === term)[0];
              this.select('ag', pn, true)
            })
          }
    }
  }

  select(role, pn, transitive) {
    if (transitive) {
      if (role === 'ag') {
        this.selectedAgent = pn
        if (this.selectedPatient) {
          this.selectedPers.emit({ "agent": this.selectedAgent, "patient": this.selectedPatient })
        } else {
          this.selectedPers.emit({ "agent": this.selectedAgent })
        }
      } else if (role === 'pat') {
        this.selectedPatient = pn
        if (this.selectedAgent) {
          this.selectedPers.emit({ "agent": this.selectedAgent, "patient": this.selectedPatient })
        } else {
          this.selectedPers.emit({ "patent": this.selectedPatient })
        }
      }
    } else {
      this.pro_chart$ = this.chartService.returnChoiceAllData('pronouns', [{ "name": pn['gloss'] }], 1)
      if (role === 'ag') {
        this.selectedPers.emit({ "agent": pn })
      } else if (role === 'pat') {
        this.selectedPers.emit({ "patient": pn })
      }
    }
  }
}
