import { TestBed } from "@angular/core/testing";

import { ConjugationService } from "./conjugation.service";

import { MockStore, provideMockStore } from "@ngrx/store/testing";

import { HttpClientModule } from "@angular/common/http";

describe("ConjugationService", () => {
  let service: ConjugationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConjugationService, provideMockStore()],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ConjugationService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
