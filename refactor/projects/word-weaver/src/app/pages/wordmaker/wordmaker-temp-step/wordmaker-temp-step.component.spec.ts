import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WordmakerTempStepComponent } from "./wordmaker-temp-step.component";

describe("WordmakerTempStepComponent", () => {
  let component: WordmakerTempStepComponent;
  let fixture: ComponentFixture<WordmakerTempStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordmakerTempStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordmakerTempStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
