import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TableviewerTempPanelComponent } from "./tableviewer-temp-panel.component";

describe("TableviewerTempPanelComponent", () => {
  let component: TableviewerTempPanelComponent;
  let fixture: ComponentFixture<TableviewerTempPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableviewerTempPanelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableviewerTempPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
