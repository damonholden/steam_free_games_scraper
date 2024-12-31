import { test } from '@playwright/test';

test('display free games', async ({ page }) => {
  await page.goto('https://store.steampowered.com/search/?sort_by=Price_ASC&maxprice=free&specials=1&ndl=1');
  const results = page.locator("#search_resultsRows > a")

  let console_log_output = ""
  for (const row of await results.all()) {
    const row_text = await row.textContent()
    const game_title = row_text.split("\n")[4].trim()
    console_log_output = console_log_output.concat("grep-target - " + game_title + "\n")
  }
  console.log("hi", console_log_output)
});