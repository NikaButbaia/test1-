import { expect, $, $$ } from "@wdio/globals";

const expectedSum = 251;
const currencySign = "$";

describe("Data Table test", () => {
  it("sum of Due values should be correct", async () => {
    browser.url("https://the-internet.herokuapp.com/login");
    await $('//input[@id="username"]').setValue("tomsmith");
    await $('//input[@id="password"]').setValue("SuperSecretPassword!");
    await $('//button[@type = "submit"]').click();
  });
});
