import { TestBed } from "@angular/core/testing";

import { EveryVoiceService } from "./every-voice.service";

describe("EveryVoiceService", () => {
  let service: EveryVoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EveryVoiceService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
