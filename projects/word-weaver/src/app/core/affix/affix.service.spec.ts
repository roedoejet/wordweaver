import { TestBed } from "@angular/core/testing";

import { HttpClientModule } from "@angular/common/http";

import { AffixService } from "./affix.service";

describe("AffixService", () => {
  let service: AffixService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AffixService],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AffixService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
