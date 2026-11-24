
// In this program we are going to handle the frames and perform the provided steps

import { test, expect } from "@playwright/test";

test("Handling Frames in W3School", async ({ page }) => {

    page.on("dialog", async (w3alert) => {

        const message = w3alert.message();
        console.log(`The message of alert is: ${message}`);

        const alertType = w3alert.type();
        console.log(`The type of alert is: ${alertType}`);

        w3alert.accept();

    })

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    //Getting the total count of frames in a webpage
    const countOfFrames = page.frames();
    console.log(`The total frames are: ${countOfFrames.length}`);

    await page.waitForLoadState("domcontentloaded");

    //Iterating theough the for loop to check url,title
    for (let i = 0; i < countOfFrames.length; i++) {

        let url = countOfFrames[i].url();
        console.log(`The url of frames in position : ${i} is ${url}`);

        /* let title = await countOfFrames[i].title();
        console.log(`The title of frames in position : ${i} is ${title}`); */

    }

    // Using frame object to check
    let frame = page.frame({ name: "iframeResult" });
    await frame?.locator("//button[@onclick='myFunction()']").click();

    //Using locator method to check
    let frameRef2 = page.frameLocator("//iframe[@id='iframeResult']");
    await frameRef2.locator("//button[@onclick='myFunction()']").click();

    expect(frameRef2.locator("#demo")).toContainText("You pressed OK!");

})

/* O/P: The total frames are: 4
The url of frames in position : 0 is https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm
The url of frames in position : 1 is about:blank
The url of frames in position : 2 is about:blank
The url of frames in position : 3 is about:blank
The message of alert is: Press a button!
The type of alert is: confirm
The message of alert is: Press a button!
The type of alert is: confirm */