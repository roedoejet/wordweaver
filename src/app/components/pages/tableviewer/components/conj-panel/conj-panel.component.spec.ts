import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjPanel } from './conj-panel.component';

describe('ConjPanel', () => {
  let component: ConjPanel;
  let fixture: ComponentFixture<ConjPanel>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjPanel ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
