// In this program we are going to automate Leaftap's aplication only by using CSS selectors

import { test, expect } from "@playwright/test";

test("Using only CSS locators- Create Lead in Leaftap", async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator("#username").fill("Demosalesmanager");

    await page.locator("[name='PASSWORD']").fill("crmsfa");

    await page.locator("[value='Login']").click();

    await page.locator("div>a").nth(1).click();

    await page.locator("[href='/crmsfa/control/leadsMain']").click();

    await page.locator("a[href$='createLeadForm']").click();

    await page.locator("#createLeadForm_companyName").fill("Hexaware");

    await page.locator("[name='firstName'][id='createLeadForm_firstName']").fill("Sabeya");

    await page.locator("[name='lastName'][id='createLeadForm_lastName']").fill("A");

    await page.locator("input[name='personalTitle']").fill("MS");

    await page.locator("#createLeadForm_generalProfTitle").fill("QA");

    await page.locator("[name='departmentName'][id='createLeadForm_departmentName']").fill("IT");

    await page.locator("#createLeadForm_annualRevenue").fill("15lakhs");

    await page.locator("#createLeadForm_primaryPhoneNumber").fill("7554589765");

    await page.locator("[name='submitButton']").click();

    await expect(page.locator("#viewLead_companyName_sp")).toContainText("Hexaware");

    await expect(page.locator("#viewLead_firstName_sp")).toContainText("Sabeya");

    await expect(page.locator("#viewLead_statusId_sp")).toContainText("Assigned");

    let title = await page.title();
    console.log(`The title after creating lead is: ${title}`)

})

// O/P: The title after creating lead is: View Lead | opentaps CRM
