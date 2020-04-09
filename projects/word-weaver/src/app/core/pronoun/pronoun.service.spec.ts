import { TestBed } from "@angular/core/testing";

import { PronounService } from "./pronoun.service";

import { HttpClientModule } from "@angular/common/http";

describe("PronounService", () => {
  let service: PronounService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PronounService],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PronounService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
