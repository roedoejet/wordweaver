import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from "@angular/core";
import { PronounService } from "../../../core/core.module";
import { Pronoun, Verb } from "../../../models/models";
import { Observable } from "rxjs";
import { EChartOption } from "echarts";
import {
  actionChangeAgent,
  actionChangePatient
} from "../../../core/wordmaker-selection/wordmaker-selection.actions";
import {
  State,
  WordmakerState
} from "../../../core/wordmaker-selection/wordmaker-selection.model";
import { Store, select } from "@ngrx/store";
import { selectWordmaker } from "../../../core/wordmaker-selection/wordmaker-selection.selectors";

@Component({
  selector: "ww-wordmaker-pers-step",
  templateUrl: "./wordmaker-pers-step.component.html",
  styleUrls: ["./wordmaker-pers-step.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordmakerPersStepComponent implements OnInit {
  pronouns$: Observable<Pronoun[]>;
  selection$: Observable<WordmakerState>;
  @Output() selectedAgent = new EventEmitter<Pronoun>();
  @Output() selectedPatient = new EventEmitter<Pronoun>();
  constructor(
    private pronounService: PronounService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.pronouns$ = this.pronounService.pronouns$;
    this.selection$ = this.store.pipe(select(selectWordmaker));
  }

  onAgentSelect(pn) {
    this.store.dispatch(actionChangeAgent({ agent: pn }));
    this.selectedAgent.emit(pn);
  }

  onPatientSelect(pn) {
    this.store.dispatch(actionChangePatient({ patient: pn }));
    this.selectedPatient.emit(pn);
  }
}
