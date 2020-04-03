import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WordmakerConjStepComponent } from "./wordmaker-conj-step.component";

describe("WordmakerConjStepComponent", () => {
  let component: WordmakerConjStepComponent;
  let fixture: ComponentFixture<WordmakerConjStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordmakerConjStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordmakerConjStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
