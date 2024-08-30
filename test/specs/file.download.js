import { expect, $ } from "@wdio/globals";
import * as path from "path";
import * as fs from "fs";
import * as os from "os";

const fileName = "5.jpg";

const downloadDir = path.join(os.tmpdir(), "downloads");

global.downloadDir = downloadDir;

function deleteFile(file_name) {
  var r = confirm("Are you sure you want to delete this Image?");
}

describe("File Download test", () => {
  before("create downloads folder", () => {
    if (!fs.existsSync(downloadDir)) {
      fs.mkdirSync(downloadDir, { recursive: true });
    }
  });

  it("file should be downloaded to the default downloads directory", async () => {
    await $(`[href="/download"]`).click();

    let fileLink = await $(`[href = "download/${fileName}"]`);
    await expect(fileLink).toExist();

    await fileLink.click();

    let downloadedFilePath = path.join(downloadDir, fileName);

    await browser.pause(4000);
    after("cleanup downloads folder", () => {
      if (fs.existsSync(downloadDir)) {
        fs.rmSync(downloadDir, { recursive: true, force: true });
      }
    });
  });
});
