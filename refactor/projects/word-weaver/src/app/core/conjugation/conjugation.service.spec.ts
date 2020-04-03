import { TestBed } from "@angular/core/testing";

import { ConjugationService } from "./conjugation.service";

describe("ConjugationService", () => {
  let service: ConjugationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConjugationService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
