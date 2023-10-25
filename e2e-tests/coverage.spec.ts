import { test } from "@playwright/test";
import { attachCoverageReport } from "monocart-reporter";
const HOME = "localhost:4200";

test("Take V8 and Istanbul coverage report", async ({ page, browserName }) => {
  if (browserName === "chromium") {
    await Promise.all([
      page.coverage.startJSCoverage({
        resetOnNavigation: false,
      }),
      page.coverage.startCSSCoverage({
        resetOnNavigation: false,
      }),
    ]);

    await page.goto(HOME);

    // delay for mock code execution
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });

    const [jsCoverage, cssCoverage] = await Promise.all([
      page.coverage.stopJSCoverage(),
      page.coverage.stopCSSCoverage(),
    ]);
    await page.close();

    const coverageList = [...jsCoverage, ...cssCoverage];

    const v8 = await attachCoverageReport(coverageList, test.info(), {});
    console.log(v8.summary);
  }
});
