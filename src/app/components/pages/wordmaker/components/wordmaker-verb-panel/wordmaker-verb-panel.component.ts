import { Component, ElementRef, EventEmitter, OnInit, Output, Input, ViewChild } from '@angular/core';
import { VerbService, ChartService } from '../../../../../services'
import { Verb } from '../../../../../models'
import { EMPTY, fromEvent, from, Observable, Subject, of } from 'rxjs';
import { concatMap, debounceTime, tap, map, merge, mergeMap, switchMap, takeUntil } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as anime from 'animejs';
import { MetaData } from '../../../../../global'
import { sortBy } from 'lodash';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms"
import { EChartOption } from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts'

@Component({
  selector: 'wordmaker-verb-panel',
  templateUrl: './wordmaker-verb-panel.component.html',
  styleUrls: ['./wordmaker-verb-panel.component.scss'],
})
export class WordmakerVerbPanel implements OnInit {
  chart_response: EChartOption
  showExplorer: boolean = true;
  verbs$: Subject<any> = new Subject<any>();
  search$: Observable<any>;
  verbs;
  loading;
  language = MetaData.language;
  display_language = "english";
  searchField: FormControl;
  verbForm: FormGroup;
  explorer_click$: Observable<any>;
  cached_clicked_verbs$: Observable<any> = of([]);
  notifier: Observable<any>;
  @ViewChild('explorer') explorer: NgxEchartsDirective;
  @Output() selectedVerb = new EventEmitter<Verb>()
  @Output() goBackTrigger = new EventEmitter()
  constructor(private verbService: VerbService, private fb: FormBuilder, private chartService: ChartService) {
    // subscribe to search input
    this.searchField = new FormControl();
    this.verbForm = this.fb.group({ search: this.searchField })
    this.chartService.returnChoiceAllData('verbs', undefined, 1).subscribe(r => this.chart_response = r)
  }

  ngOnInit() {
    this.search$ = this.searchField.valueChanges.pipe(
      debounceTime(100),
      switchMap(term => this.verbService.verbs$.pipe(
        map(verbs => {
          let new_verbs = verbs.filter(v =>
            (v.gloss.toLowerCase().indexOf(term.toLowerCase()) > -1 || v.display.toLowerCase().indexOf(term.toLowerCase()) > -1))
          this.chartService.returnChoiceAllData('verbs', this.chartService.returnBasicDataFrom(new_verbs), 1).subscribe(r => {
            return this.chart_response = r
          }
          )
          return new_verbs
        }
        )))
    )
    this.verbService.verbs$.pipe(
      merge(this.search$),
      map(verbs => this.sortVerbs(verbs))
    ).subscribe(x => this.verbs$.next(x))
  }

  onChartClick(ev) {
    let term = ev['data']['name']
    // If not final, change pool of verbs
    if (ev['data']['children']) {
      let clicked_verb_glosses = ev['data']['children'].map(x => x['name'])
      this.cached_clicked_verbs$ = this.cached_clicked_verbs$.pipe(
        map(cached_clicked_verbs => {
          // if verbs exist in pool already, remove them
          if (cached_clicked_verbs.some(v => clicked_verb_glosses.indexOf(v) > -1)) {
            return cached_clicked_verbs.filter(v => clicked_verb_glosses.indexOf(v) < 0)
            // otherwise add them
          } else {
            return cached_clicked_verbs.concat(clicked_verb_glosses)
          }
        })
      )
    } else {
      this.verbService.verbs$.subscribe(verbs => verbs.filter(v => {
        if (v.gloss === term) {
          this.select(v)
        }
      }))
    }
    this.cached_clicked_verbs$.pipe(
      switchMap(glosses => this.verbService.verbs$.pipe(
        map(verbs => verbs.filter(v => glosses.indexOf(v['gloss']) > -1))
      ))
    ).subscribe(x => this.verbs$.next(x))
  }

  goBack(){
    this.goBackTrigger.emit()
  }

  select(verb) {
    this.chartService.returnChoiceAllData('verbs', [{ "name": verb['gloss'] }], 1).subscribe(r => this.chart_response = r)
    this.selectedVerb.emit(verb)
  }

  sortVerbs(verbs) {
    if (this.display_language === 'english') {
      return sortBy(verbs, ['gloss']);
    } else {
      return sortBy(verbs, ['display']);
    }
  }

  flipCards() {
    if (this.display_language === 'english') {
      anime({
        targets: '#chip',
        rotateX: ['0', '360'],
        // translateX: 5000,
        duration: 800,
        easing: 'easeInOutQuad',
      });
    } else {
      console.log('flip')
      anime({
        targets: '#chip',
        rotateX: ['360', '0'],
        // translateX: 5000,
        duration: 800,
        easing: 'easeInOutQuad',
      });
    }
  }




}
