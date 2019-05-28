import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableviewerPage } from './tableviewer';

describe('TableviewerPage', () => {
  let component: TableviewerPage;
  let fixture: ComponentFixture<TableviewerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableviewerPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableviewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
