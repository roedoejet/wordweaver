import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ConjugationListComponent } from "./conjugation-list.component";

describe("ConjugationListComponent", () => {
  let component: ConjugationListComponent;
  let fixture: ComponentFixture<ConjugationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConjugationListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjugationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
