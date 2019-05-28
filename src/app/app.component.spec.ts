import { TestBed, async } from '@angular/core/testing';
import { MainApp } from './app.component';
import { MetaData } from './global'
describe('MainApp', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainApp
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(MainApp);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(MainApp);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(MainApp);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain(MetaData.title);
  }));
});
