import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempPanel } from './temp-panel.component';

describe('TempPanel', () => {
  let component: TempPanel;
  let fixture: ComponentFixture<TempPanel>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempPanel ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
