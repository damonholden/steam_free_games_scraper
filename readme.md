
# Steam Free Games Scraper

This Playwright script oges to the steam website and grabs the full list of promotionally-free games.

## Running the script

The following command can be used to run the script to get an output of all the free game titles - `npx playwright test --project=chromium | grep --only-matching --perl-regexp '(?<=grep-target - ).*'`.

### command explanation

- `npx playwright test` - the command that invokes the Playwright testing software.
- `--project=chromium` - only runs the tests with the chromium browser (used here to get a single output).
- `| grep` - pipes the output from the playwright test run into a grep command.
- `--only-matching` - each match from the grep command only outputs the matched text from that line.
- `--perl-regexp` - allows for extended regexp syntax in the grep pattern.
- `'(?<=grep-target - ).*'` - a regexp that matches any text (`.*`)in front of the lookbehind assertion (`(?<=grep-target - )`) that targets the string `grep-target - `.

