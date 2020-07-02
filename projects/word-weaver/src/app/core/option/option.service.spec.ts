import { TestBed } from "@angular/core/testing";

import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { OptionService } from "./option.service";

describe("OptionService", () => {
  let service: OptionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptionService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(OptionService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
