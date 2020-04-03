import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WordmakerVerbStepComponent } from "./wordmaker-verb-step.component";

describe("WordmakerVerbStepComponent", () => {
  let component: WordmakerVerbStepComponent;
  let fixture: ComponentFixture<WordmakerVerbStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordmakerVerbStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordmakerVerbStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
