import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TableviewerComponent } from "./tableviewer.component";

describe("TableviewerComponent", () => {
  let component: TableviewerComponent;
  let fixture: ComponentFixture<TableviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableviewerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
