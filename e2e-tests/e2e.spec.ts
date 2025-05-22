import { test, expect } from "@playwright/test";
const HOME = "localhost:4200";

test("has title", async ({ page }) => {
  await page.goto(HOME);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/WordWeaver/);
});

test("navigate to tableviewer", async ({ page }) => {
  await page.goto(HOME + "/tableviewer");

  // Expects page to have a heading with the name of Installation.
  await expect(page.url()).toContain("tableviewer");
});

test("get started link", async ({ page }) => {
  await page.goto(HOME + "/wordmaker");

  await expect(page.url()).toContain("wordmaker");

  // Click the get started link.
  await page.getByTestId("start").click();

  await expect(page.url()).toContain("stepper");
});
