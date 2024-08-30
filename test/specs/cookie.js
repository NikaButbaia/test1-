import { expect, $, $$ } from "@wdio/globals";

describe("data table test", () => {
  it("sum of due values should be correct", async () => {
    browser.url("https://orteil.dashnet.org/cookieclicker/");
    await $('//div[@class="langSelectButton title"]').click();
    const bigCookie = await $('//button[@id="bigCookie"]');
    const NumberOfClicks = 100;
    for (let i = 0; i < NumberOfClicks; i++) {
      await bigCookie.click();
      await browser.pause(200);
    }
  });
});
