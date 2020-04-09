import { TableViewerPage } from "./tableviewer.po";
import { getCurrentRouteUrl } from "../utils/utils";

describe("Table Viewer Page", () => {
  let page: TableViewerPage;

  beforeEach(() => (page = new TableViewerPage()));

  it('should redirect to "tableviewer" route', () => {
    page.navigateTo();
    expect(getCurrentRouteUrl()).toEqual("tableviewer");
  });
});
