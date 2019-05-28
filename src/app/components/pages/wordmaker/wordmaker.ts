// Core
import { Component, HostListener } from '@angular/core';

// Models
import { Verb, Conjugation, AffOption, Pronoun } from '../../../models'

// Services
import { ConjugationService, ChartService, VerbService, PronounService, AffixService } from '../../../services'

// Imports
import { MetaData } from '../../../global'
import * as anime from 'animejs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { EChartOption } from 'echarts';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'page-wordmaker',
  templateUrl: 'wordmaker.html',
  styleUrls: [
    './wordmaker.scss'
  ]
})
export class WordmakerPage {
  verbs: EChartOption
  who: EChartOption
  when: EChartOption
  showVerbs: boolean = false;
  showWho: boolean = false;
  showWhen: boolean = false;
  title = MetaData.title
  currentStep = 0
  selectedVerb: Verb;
  selectedPers: Pronoun;
  selectedTemp: AffOption;
  word$: Observable<Conjugation>;

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == 'Enter' || event.key == 'ArrowRight') {
      this.nextStep()
    }
    if (event.key == 'ArrowLeft') {
      this.previousStep()
    }
  }

  tempSelected(temp: AffOption) {
    this.selectedTemp = temp
    this.finalStep()
  }

  verbSelected(verb: Verb) {
    console.log(verb)
    this.selectedVerb = verb
    this.secondStep()
  }

  persSelected(pn) {
    this.selectedPers = pn
    if (this.selectedVerb.thematic_relation === 'red' && "agent" in pn) {
      this.thirdStep()
    } else if (this.selectedVerb.thematic_relation === 'blue' && "patient" in pn) {
      this.thirdStep()
    } else if (this.selectedVerb.thematic_relation === 'purple' && "agent" in pn && "patient" in pn) {
      this.thirdStep()
    } else {
    }
  }

  constructor(private conjugationService: ConjugationService, private chartService: ChartService, private snackBar: MatSnackBar, private verbService: VerbService, private pronounService: PronounService, private affixService: AffixService) {
  }

  randomX(x) {
    return x[Math.floor((Math.random() * (x.length - 1)) + 1)]
  }

  pickRandom(selection_type: string) {
    if (selection_type === 'verb') {
      return this.verbService.verbs$.pipe(
        map(x => this.randomX(x))
      )
    } else if (selection_type === 'pronoun') {
      if (this.selectedVerb.thematic_relation === 'red') {
        return this.pronounService.pronouns$.pipe(
          map(x => { return { 'agent': this.randomX(x) } })
        )
      } else if (this.selectedVerb.thematic_relation === 'blue') {
        return this.pronounService.pronouns$.pipe(
          map(x => { return { 'patient': this.randomX(x) } })
        )
      } else if (this.selectedVerb.thematic_relation === "purple") {
        return this.pronounService.pronouns$.pipe(
          map(pns => {
            let ag = this.randomX(pns);
            let pats = pns.filter(x => x.person !== ag.person && !(ag.person === '2' && x.inclusivity === 'incl') && !(ag.inclusivity === 'incl' && x.person === '2'));
            let pat = this.randomX(pats);
            return { 'agent': ag, 'patient': pat }
          }))
      }
    } else if (selection_type === 'temp') {
      return this.affixService.affoptions$.pipe(
        map(x => { return { 'affopt': this.randomX(x)['tag'] } })
      )
    }
  }

  showExplorer(el) {
    if (el === 'verbs') {
      this.chartService.returnChoiceAllData('verbs', undefined, 1).subscribe(r => { this.verbs = r; this.showVerbs = true });
    } else if (el === 'who') {
      this.chartService.returnChoiceAllData('pronouns', undefined, 1).subscribe(r => { this.who = r; this.showWho = true });
    } else if (el === 'when') {
      this.chartService.returnChoiceAllData('aff-options', undefined, 1).subscribe(r => { this.when = r; this.showWhen = true });
    }
  }

  hideExplorer(el) {
    if (el === 'verbs') {
      this.chartService.returnChoiceAllData('verbs', undefined, 0).subscribe(r => {
        this.verbs = r;
        setTimeout(() => this.showVerbs = false, 500)
      });
    } else if (el === 'who') {
      this.chartService.returnChoiceAllData('pronouns', undefined, 0).subscribe(r => {
        this.who = r;
        setTimeout(() => this.showWho = false, 500)
      });
    } else if (el === 'when') {
      this.chartService.returnChoiceAllData('aff-options', undefined, 0).subscribe(r => {
        this.when = r;
        setTimeout(() => this.showWhen = false, 500)
      });
    }
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // this.startStep()
  }

  nextStep() {
    if (this.currentStep == 0) {
      this.firstStep()
    } else if (this.currentStep == 1) {
      if (this.selectedVerb) {
        this.secondStep()
      } else {
        this.pickRandom('verb').subscribe(v => {
          this.snackBar.open(`You didn't select anything, so the Word Maker picked '${v.gloss}'!`, "", { duration: 2500, verticalPosition: 'top' });
          this.verbSelected(v)
        })
      }
    } else if (this.currentStep == 2) {
      if (this.selectedPers) {
        this.thirdStep()
      } else {
        this.pickRandom('pronoun').subscribe(p => {
          this.snackBar.open(`You didn't select anything, so the Word Maker picked for you!`, "", { duration: 2500, verticalPosition: 'top' });
          this.persSelected(p)
        })
      }
    } else if (this.currentStep == 3) {
      if (this.selectedTemp) {
        this.finalStep()
      } else {
        this.pickRandom('temp').subscribe(t => {
          this.snackBar.open(`You didn't select anything, so the Word Maker picked for you!`, "", { duration: 2500, verticalPosition: 'top' });
          this.tempSelected(t)
        })
      }
    }
  }

  triggeredPreviousStep(start?){
    if (start){
      this.backToFirstStep()
    } else {
      this.previousStep()
    }
  }

  previousStep() {
    if (this.currentStep == 4) {
      this.backToThirdStep()
    } else if (this.currentStep == 3) {
      this.backToSecondStep()
    } else if (this.currentStep == 2) {
      this.backToFirstStep()
    } else {
      this.backToStartStep()
    }
  }

  startStep() {
    this.currentStep = 0
  }

  backToStartStep() {
    this.currentStep = 0
  }

  firstStep() {
    anime({
      targets: "#welcome",
      translateX: 5000,
      duration: 1000,
      easing: 'easeInOutQuad',
      complete: () => {
        this.currentStep = 1
        anime({
          targets: "#firstStep div mat-chip-list div mat-chip",
          translateX: 50,
          duration: 250,
          easing: 'easeInOutQuad'
        });
      }
    });
  }

  backToFirstStep() {
    this.selectedVerb = null;
    this.selectedPers = null;
    this.selectedTemp = null;
    this.currentStep = 1
  }

  backToSecondStep() {
    this.selectedPers = null;
    this.selectedTemp = null;
    this.currentStep = 2
  }

  backToThirdStep() {
    this.selectedTemp = null;
    this.currentStep = 3
  }

  secondStep() {
    anime({
      targets: "#firstStep div mat-chip-list div mat-chip",
      translateX: 1200,
      duration: 1000,
      opacity: 0,
      delay: function (el, i) { return i * 5 },
      easing: 'easeInOutQuad',
      complete: () => {
        this.currentStep = 2
        anime({
          targets: "#secondStep",
          translateX: 3000,
          duration: 1500,
          easing: 'easeInOutQuad'
        });
      }
    });
  }

  thirdStep() {
    anime({
      targets: "#secondStep div div mat-chip-list div mat-chip",
      translateX: 1200,
      duration: 1000,
      opacity: 0,
      delay: function (el, i) { return i * 5 },
      easing: 'easeInOutQuad',
      complete: () => {
        this.currentStep = 3
        anime({
          targets: "#thirdStep",
          translateX: 3000,
          duration: 1500,
          easing: 'easeInOutQuad'
        });
      }
    });
  }

  finalStep() {
    let ag_tag = []
    let pat_tag = []
    if ("agent" in this.selectedPers) {
      ag_tag.push(this.selectedPers['agent']['tag'])
    }
    if ("patient" in this.selectedPers) {
      pat_tag.push(this.selectedPers['patient']['tag'])
    }
    let vb_tag = this.selectedVerb['tag']
    let ao_tag = this.selectedTemp['affopt']
    let table_args = { "agent": ag_tag, "patient": pat_tag, "root": [vb_tag], "aff-option": [ao_tag] }
    console.log(table_args)
    this.word$ = this.conjugationService.conjugateTable(table_args)
    anime({
      targets: "#thirdStep div div mat-chip-list div mat-chip",
      translateX: 1200,
      duration: 1000,
      opacity: 0,
      delay: function (el, i) { return i * 5 },
      easing: 'easeInOutQuad',
      complete: () => {
        this.currentStep = 4
      }
    });

  }


  flip(ev: Event, verb) {
    if (!verb.flipped) {
      anime({
        targets: ev.target,
        rotateX: ['0', '360'],
        // translateX: 5000,
        duration: 800,
        easing: 'easeInOutQuad',
        update: () => {
          setTimeout(() => {
            verb.flipped = true;
          }, 400)
        },
      });
    }
  }

  unflip(ev, verb) {
    anime({
      targets: ev.target,
      rotateX: ['360', '0'],
      // translateX: 5000,
      duration: 800,
      easing: 'easeInOutQuad',
      update: () => {
        setTimeout(() => {
          verb.flipped = false;
        }, 400)
      }
    });
    // }
  }

}