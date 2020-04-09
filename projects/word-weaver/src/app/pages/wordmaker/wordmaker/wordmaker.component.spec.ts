import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SharedModule } from "../../../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { WordmakerComponent } from "./wordmaker.component";
import { WordmakerConjStepComponent } from "../wordmaker-conj-step/wordmaker-conj-step.component";
import { WordmakerPersStepComponent } from "../wordmaker-pers-step/wordmaker-pers-step.component";
import { WordmakerTempStepComponent } from "../wordmaker-temp-step/wordmaker-temp-step.component";
import { WordmakerVerbStepComponent } from "../wordmaker-verb-step/wordmaker-verb-step.component";

describe("WordmakerComponent", () => {
  let component: WordmakerComponent;
  let fixture: ComponentFixture<WordmakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WordmakerComponent,
        WordmakerConjStepComponent,
        WordmakerTempStepComponent,
        WordmakerVerbStepComponent,
        WordmakerPersStepComponent
      ],
      imports: [
        SharedModule,
        NoopAnimationsModule,
        TranslateModule.forRoot(),
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordmakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
