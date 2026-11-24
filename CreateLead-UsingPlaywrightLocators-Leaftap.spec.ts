
// In this program using only playwright locators to automate the leaftap's application for creating lead

import { test, expect } from "@playwright/test";

test("Creating Lead using pw locators-Leaftap's application", async ({ page }) => {

  await page.goto("http://leaftaps.com/opentaps/control/main");

  await page.getByLabel("Username", { exact: true }).fill("Demosalesmanager");

  await page.getByRole("textbox", { name: "Password", exact: true }).fill("crmsfa");

  await page.getByRole("button", { name: "Login", exact: true }).click();

  await page.getByText("CRM/SFA", { exact: true }).click();

  await page.getByRole("link", { name: "Leads", exact: true }).click();

  await page.getByRole("link", { name: "Create Lead", exact: true }).click();

  await page.getByRole("row")
    .filter({ hasText: "Company Name" })
    .getByRole("textbox").first()
    .fill("Cognizant");

  await page.getByRole("row")
    .filter({ hasText: "First name" })
    .getByRole("textbox").first()
    .fill("Sabeya");

  await page.getByRole("row")
    .filter({ hasText: "Last name" })
    .getByRole("textbox").nth(1)
    .fill("A");

  await page.getByRole("row")
    .filter({ hasText: "Salutation" })
    .getByRole("textbox").first()
    .fill("QA");

  await page.getByRole("row")
    .filter({ hasText: "Title" })
    .getByRole("textbox").first()
    .fill("Engineer");

  await page.getByRole("row")
    .filter({ hasText: "Department" })
    .getByRole("textbox").nth(1)
    .fill("IT");

  await page.getByRole("row")
    .filter({ hasText: "Phone Number" })
    .getByRole("textbox").nth(1)
    .fill("7445644187");

  await page.getByRole("button", { name: "Create Lead" }).nth(1).click()

  await expect(page).toHaveURL(/viewLead/);
  await expect(page.locator("#viewLead_companyName_sp")).toContainText("Cognizant");

  console.log("Using only playwright locators I created the lead");

})

// O/P: Using only playwright locators I created the lead