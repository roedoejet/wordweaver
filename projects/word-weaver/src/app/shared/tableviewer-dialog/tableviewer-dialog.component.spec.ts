import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TableViewerDialogComponent } from "./tableviewer-dialog.component";

describe("TableViewerDialogComponent", () => {
  let component: TableViewerDialogComponent;
  let fixture: ComponentFixture<TableViewerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableViewerDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
