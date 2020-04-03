import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TableviewerConjPanelComponent } from "./tableviewer-conj-panel.component";

describe("TableviewerConjPanelComponent", () => {
  let component: TableviewerConjPanelComponent;
  let fixture: ComponentFixture<TableviewerConjPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableviewerConjPanelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableviewerConjPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
