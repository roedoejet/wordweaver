import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ConjugationTreeComponent } from "./conjugation-tree.component";

describe("ConjugationTreeComponent", () => {
  let component: ConjugationTreeComponent;
  let fixture: ComponentFixture<ConjugationTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConjugationTreeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjugationTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
