import { expect, $ } from "@wdio/globals";

const randomString = crypto.randomUUID();

describe("Dynamic Controls test", () => {
  it("populated text should be displayed in dynamic control", async () => {
    await $('//*[@href="/dynamic_controls"]').click();

    await $('//button[text() = "Enable"]').click();
    let loading = await $('//div[@id="loading"]');
    await loading.waitForDisplayed({ timeout: 20000, reverse: true });

    let input = await $('//input[@type="text"]');
    expect(await input.isEnabled()).toBe(true);
    await $('//input[@type="text"]').setValue(randomString);
    const inputValue = await input.getValue();
    expect(inputValue).toBe(randomString);
  });
});
