import { TestBed } from "@angular/core/testing";

import { VerbService } from "./verb.service";

import { HttpClientModule } from "@angular/common/http";

describe("VerbService", () => {
  let service: VerbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerbService],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(VerbService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
