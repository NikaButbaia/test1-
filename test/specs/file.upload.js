import { expect, $ } from "@wdio/globals";
import * as path from "path";

const fileName = "5.jpg";
const fullPathToFile = path.resolve(`./uploads/${fileName}`);

describe("File Upload test", () => {
  it("file should be uploaded from the default uploads directory", async () => {
    await $('[href="/upload"]').click();
    const fileInput = await $("#file-upload");
    await fileInput.setValue(fullPathToFile);
    await $("#file-submit").click();
    let uploadedFiles = await $("#uploaded-files").getText();
    await expect(uploadedFiles).toContain(fileName);
  });
});
