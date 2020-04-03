import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WordmakerPersStepComponent } from "./wordmaker-pers-step.component";

describe("WordmakerPersStepComponent", () => {
  let component: WordmakerPersStepComponent;
  let fixture: ComponentFixture<WordmakerPersStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordmakerPersStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordmakerPersStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
