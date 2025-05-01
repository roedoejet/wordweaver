import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EveryVoiceComponent } from "./every-voice.component";

describe("EveryVoiceComponent", () => {
  let component: EveryVoiceComponent;
  let fixture: ComponentFixture<EveryVoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
