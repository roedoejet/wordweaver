import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TableviewerPersPanelComponent } from "./tableviewer-pers-panel.component";

describe("TableviewerPersPanelComponent", () => {
  let component: TableviewerPersPanelComponent;
  let fixture: ComponentFixture<TableviewerPersPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableviewerPersPanelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableviewerPersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
