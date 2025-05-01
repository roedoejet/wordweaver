import { TestBed } from "@angular/core/testing";

import { EveryVoiceService } from "./every-voice.service";
import { EveryVoiceModule } from "./every-voice.module";
describe("EveryVoiceService", () => {
  let service: EveryVoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EveryVoiceModule.forRoot({ apiUrl: "test", enableTTS: true })],
    });
    service = TestBed.inject(EveryVoiceService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
