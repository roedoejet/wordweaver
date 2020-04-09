import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WordmakerHomeComponent } from "./wordmaker-home.component";

describe("WordmakerHomeComponent", () => {
  let component: WordmakerHomeComponent;
  let fixture: ComponentFixture<WordmakerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordmakerHomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordmakerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
