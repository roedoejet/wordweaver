import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ConjugationSimpleGridComponent } from "./conjugation-simple-grid.component";

describe("ConjugationSimpleGridComponent", () => {
  let component: ConjugationSimpleGridComponent;
  let fixture: ComponentFixture<ConjugationSimpleGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConjugationSimpleGridComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjugationSimpleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
