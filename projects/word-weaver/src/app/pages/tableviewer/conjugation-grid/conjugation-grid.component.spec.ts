import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ConjugationGridComponent } from "./conjugation-grid.component";

describe("ConjugationGridComponent", () => {
  let component: ConjugationGridComponent;
  let fixture: ComponentFixture<ConjugationGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConjugationGridComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjugationGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
