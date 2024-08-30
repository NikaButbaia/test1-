import { expect, $, $$ } from "@wdio/globals";

describe("login", () => {
  it("should login", async () => {
    browser.url("https://www.facebook.com/");
    await $('//input[@id="email"]').setValue("598417809");
    await $('//input[@id="pass"]').setValue("Test101!");
    await $('//button[@name = "login"]').click();
  });
});
