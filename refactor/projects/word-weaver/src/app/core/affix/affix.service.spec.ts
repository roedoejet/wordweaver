import { TestBed } from "@angular/core/testing";

import { AffixService } from "./affix.service";

describe("AffixService", () => {
  let service: AffixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffixService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
