import { expect, $, $$ } from "@wdio/globals";

const successfulMessage = "You successfully clicked an alert";

describe("Alert Handling test", () => {
  it("successful message should be displayed after alert handling", async () => {
    await $('[href="/javascript_alerts"]').click();
    await $('[onclick="jsAlert()"]').click();

    browser.acceptAlert();

    let message = await $('//p[@id="result"]').getText();
    expect(message).toBe(successfulMessage);

    console.log(message);

    await $('//button[@onclick="jsConfirm()"]').click();
    browser.acceptAlert();

    message = await $('//p[@id="result"]').getText();

    console.log(message);
  });
});
