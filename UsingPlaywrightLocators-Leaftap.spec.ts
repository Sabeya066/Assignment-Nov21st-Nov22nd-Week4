// In this program we are going to automate the leaftap's application only by using playwright inbuilt locators


import {test, expect} from "@playwright/test";

test("Using only playwright locators in leatap's application", async({page}) =>{

await page.goto("https://leaftaps.com/opentaps/control/main");

await page.getByText("Username", {exact:true}).fill("democsr2");

await page.getByLabel("Password", {exact:true}).fill("crmsfa");

await page.getByRole("button", {name: "Login", exact:true}).click();

await page.getByRole("link", {name: "CRM/SFA", exact:true}).click();

await page.getByText("Leads", {exact:true}).click();

await page.getByRole("link", {name: "Create Lead", exact:true}).click();

let title = await page.title();
console.log(`The title of create leads page is: ${title}`);

await expect(page).toHaveTitle("Create Lead | opentaps CRM");
console.log("You are in create lead page");

})

/* O/P: The title of create leads page is: 
You are in create lead page */