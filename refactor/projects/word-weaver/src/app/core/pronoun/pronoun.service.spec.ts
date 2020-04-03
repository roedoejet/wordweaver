import { TestBed } from "@angular/core/testing";

import { PronounService } from "./pronoun.service";

describe("PronounService", () => {
  let service: PronounService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PronounService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
