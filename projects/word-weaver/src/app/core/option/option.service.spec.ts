import { TestBed } from "@angular/core/testing";

import { HttpClientModule } from "@angular/common/http";

import { OptionService } from "./option.service";

describe("OptionService", () => {
  let service: OptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptionService],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(OptionService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
