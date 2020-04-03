import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WordmakerComponent } from "./wordmaker.component";

describe("WordmakerComponent", () => {
  let component: WordmakerComponent;
  let fixture: ComponentFixture<WordmakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordmakerComponent]
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
