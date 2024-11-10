import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://tickantel.com.uy/inicio/espectaculo/40017673?2");

  const enabledCount = await page.evaluate(() => {
    const elements = document.evaluate(
      "//a[contains(@class, 'btn') and contains(@class, 'btn-small') and text() = 'Comprar' and @href != '']",
      document,
      null,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
      null
    );

    let count = 0;
    for (let i = 0; i < elements.snapshotLength; i++) {
      const element = elements.snapshotItem(i);
      if (element instanceof Element && element.getAttribute("href") !== "") {
        count++;
      }
    }
    return count;
  });

  console.log(`Number of enabled 'Comprar' links: ${enabledCount}`);

  await browser.close();

  if (enabledCount < 5 ) {
    console.error("Enabled 'Comprar' links are less than 10. Failing the job.");
    process.exit(1);
  }
})();
