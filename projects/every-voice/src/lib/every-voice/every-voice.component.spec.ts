import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EveryVoiceComponent } from "./every-voice.component";
import { EveryVoiceModule } from "../every-voice.module";
describe("EveryVoiceComponent", () => {
  let component: EveryVoiceComponent;
  let fixture: ComponentFixture<EveryVoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EveryVoiceModule.forRoot({ apiUrl: "test", enableTTS: true })],
      declarations: [EveryVoiceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EveryVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
