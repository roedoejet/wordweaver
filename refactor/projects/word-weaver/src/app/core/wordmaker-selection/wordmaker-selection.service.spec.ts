import { TestBed } from "@angular/core/testing";

import { WordmakerSelectionService } from "./wordmaker-selection.service";

describe("WordmakerSelectionService", () => {
  let service: WordmakerSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordmakerSelectionService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
