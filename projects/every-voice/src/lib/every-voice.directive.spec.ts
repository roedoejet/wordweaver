import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { EveryVoiceDirective } from "./every-voice.directive";
import { EveryVoiceService } from "./every-voice.service";
import { By } from "@angular/platform-browser";

@Component({
  template: `<span [libTts]="testText">Play</span>`,
})
class TestHostComponent {
  testText = "Hello world";
}

describe("TtsDirective", () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let mockTtsService: jasmine.SpyObj<EveryVoiceService>;

  beforeEach(() => {
    mockTtsService = jasmine.createSpyObj("TtsService", ["speak"]);

    TestBed.configureTestingModule({
      declarations: [EveryVoiceDirective, TestHostComponent],
      providers: [{ provide: EveryVoiceService, useValue: mockTtsService }],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it("should call TtsService.speak() with the correct text on click", () => {
    const span = fixture.debugElement.query(By.css("span"));
    span.nativeElement.click();

    expect(mockTtsService.playSound).toHaveBeenCalledWith("Hello world");
  });
});
