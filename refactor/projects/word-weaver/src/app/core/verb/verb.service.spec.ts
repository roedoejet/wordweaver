import { TestBed } from "@angular/core/testing";

import { VerbService } from "./verb.service";

describe("VerbService", () => {
  let service: VerbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerbService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
