//In this program we are going to edit the lead in leaftap's application only by using CSS Selector.


import { test, expect } from "@playwright/test";

test("Using only CSS locators- Create Lead in Leaftap", async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator("#username").fill("Demosalesmanager");

    await page.locator("[name='PASSWORD']").fill("crmsfa");

    await page.locator("[value='Login']").click();

    await page.locator("div>a").nth(1).click();

    await page.locator("[href='/crmsfa/control/leadsMain']").click();

    await page.locator("a[href$='findLeads']").click();

    await page.locator("[class='linktext'][href*='partyId=']").first().click();

    await page.locator("a[href^='updateLeadForm']").click();

    let companyName = page.locator("#updateLeadForm_companyName");
    await companyName.clear();
    await companyName.fill("Mphasis");

    let annualRevenue = page.locator("#updateLeadForm_annualRevenue");
    await annualRevenue.clear();
    await annualRevenue.fill("18Lakhs");

    let department = page.locator("#updateLeadForm_departmentName");
    await department.clear();
    await department.fill("Non IT");

    let description = page.locator("#updateLeadForm_description");
    description.clear();
    description.fill("I have updated it");

    await page.locator("[name='submitButton'][value='Update']").click();

    await expect(page.locator("#viewLead_companyName_sp")).toContainText("Mphasis");

    await expect(page.locator("#viewLead_annualRevenue_sp")).toContainText("$18.00");

    let title = await page.title();
    console.log(`After updating the page title displayed is: ${title}`);

})

// O/P: After updating the page title displayed is: View Lead | opentaps CRM