import { TestBed } from "@angular/core/testing";

import { TableviewerSelectionService } from "./tableviewer-selection.service";

describe("TableviewerSelectionService", () => {
  let service: TableviewerSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableviewerSelectionService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
