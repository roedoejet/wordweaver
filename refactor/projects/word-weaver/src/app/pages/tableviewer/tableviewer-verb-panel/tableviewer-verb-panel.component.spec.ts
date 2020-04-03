import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TableviewerVerbPanelComponent } from "./tableviewer-verb-panel.component";

describe("TableviewerVerbPanelComponent", () => {
  let component: TableviewerVerbPanelComponent;
  let fixture: ComponentFixture<TableviewerVerbPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableviewerVerbPanelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableviewerVerbPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
