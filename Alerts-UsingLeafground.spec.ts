
/* In this program we are going to automate different type of alerts and will be
printing the message and type of alert and we will use assertion for checking */

import { test, expect } from "@playwright/test";


test("Handling different type of alert", async ({ page }) => {

    page.on("dialog", async (HandlingAlerts) => {

        const message = HandlingAlerts.message();
        console.log(message);

        const typeOfAlerts = HandlingAlerts.type();
        console.log(typeOfAlerts);

        if (typeOfAlerts === "alert") {
            HandlingAlerts.accept();
        }
        else if (typeOfAlerts === "confirm") {
            HandlingAlerts.dismiss();
        }
        else {
            HandlingAlerts.accept("Sabeya");
        }

    })

    await page.goto("https://www.leafground.com/alert.xhtml");

    let simpleAlert = page.locator("(//span[text()='Show'])[1]");
    await simpleAlert.click();

    let confirmAlert = page.locator("(//span[text()='Show'])[2]");
    await confirmAlert.click();

    let confirmInnerText = page.locator("#result");
    console.log(await confirmInnerText.innerText());

    expect(confirmInnerText).toContainText("User Clicked : ")

    let promptAlert = page.locator("(//span[text()='Show'])[5]");
    await promptAlert.click();

    let promptInnerText = page.locator("#confirm_result");
    console.log(await promptInnerText.innerText());

    expect(promptInnerText).toHaveText("User entered name as: Sabeya");

    let sweetSimpleAlert = page.locator("//h5[normalize-space()='Sweet Alert (Simple Dialog)']/following::span[2]");
    await sweetSimpleAlert.click();
    await page.locator("//span[text()='Dismiss']").click();

    let sweetModalAlert = page.locator("//h5[text()='Sweet Modal Dialog']/following::span[2]");
    await sweetModalAlert.click();
    await page.locator("(//a[@href='#']/span[@class='ui-icon ui-icon-closethick'])[2]").click();

    let minAndMax = page.locator("//h5[text()='Minimize and Maximize']/following::span[2]");
    await minAndMax.click();
    await page.locator("//a[@class='ui-dialog-titlebar-icon ui-dialog-titlebar-maximize ui-corner-all']").click();
    await page.locator("(//a[@class='ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all'])[3]").click();

    let sweetConfirmAlert = page.locator("//span[text()='Delete']");
    await sweetConfirmAlert.click();
    await page.locator("//span[text()='Yes']").click();

})

/* O/P: I am simple alert.
alert
Did you call me?
confirm
User Clicked : Cancel
Type your name and click OK
prompt
User entered name as: Sabeya */