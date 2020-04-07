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

@Component({
  selector: "ww-wordmaker-pers-step",
  templateUrl: "./wordmaker-pers-step.component.html",
  styleUrls: ["./wordmaker-pers-step.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordmakerPersStepComponent implements OnInit {
  pronouns$: Observable<Pronoun[]>;
  selectedAgent: string;
  selectedPatient: string;
  @Input() selectedVerb: Verb;
  @Output() selectedPers = new EventEmitter<any>();
  constructor(private pronounService: PronounService) {}

  ngOnInit(): void {
    this.pronouns$ = this.pronounService.pronouns$;
  }

  // TODO: refactor
  select(role, pn, transitive) {
    if (transitive) {
      if (role === "ag") {
        this.selectedAgent = pn;
        if (this.selectedPatient) {
          this.selectedPers.emit({
            agent: this.selectedAgent,
            patient: this.selectedPatient
          });
        } else {
          this.selectedPers.emit({ agent: this.selectedAgent });
        }
      } else if (role === "pat") {
        this.selectedPatient = pn;
        if (this.selectedAgent) {
          this.selectedPers.emit({
            agent: this.selectedAgent,
            patient: this.selectedPatient
          });
        } else {
          this.selectedPers.emit({ patient: this.selectedPatient });
        }
      }
    } else {
      if (role === "ag") {
        this.selectedPers.emit({ agent: pn });
      } else if (role === "pat") {
        this.selectedPers.emit({ patient: pn });
      }
    }
  }
}
