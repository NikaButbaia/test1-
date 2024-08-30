import { expect, $, $$ } from "@wdio/globals";

const expectedSum = 251;
const currencySign = "$";

async function getAllColumnElements(headerName) {
  const headerElementsArray = await $$("(//thead)[1]/tr/th/span");
  const headerTextsArray = [];

  for (const element of headerElementsArray) {
    const text = await element.getText();
    headerTextsArray.push(text);
  }

  const indexOfDueElement = headerTextsArray.indexOf(headerName);

  const tbodyElements = await $$("(//tbody)[1]/tr/td");
  const resultsElements = [];

  let elementsCounter = 0;
  const rowCount = headerElementsArray.length;

  for (const element of tbodyElements) {
    if (elementsCounter == rowCount) {
      elementsCounter = 0;
    }
    if (elementsCounter == indexOfDueElement) {
      const text = await element.getText();
      resultsElements.push(text);
    }
    elementsCounter++;
  }
  return resultsElements;
}

describe("Data Table test", () => {
  it("sum of Due values should be correct", async () => {
    await $('[href="/tables"]').click();

    const resultsElements = await getAllColumnElements("Due");

    let actualSum = 0;

    for (const money of resultsElements) {
      actualSum += parseInt(money.replace(currencySign, ""));
    }

    expect(actualSum).toBe(expectedSum);
  });
});
