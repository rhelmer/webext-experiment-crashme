"use strict";

/* global browser */

browser.browserAction.onClicked.addListener(() => {
  console.log("about to crash...");
  browser.experiments.crash.abort().then(
    message => console.log("SHOULD NOT RUN, already crashed", message)
  );
});
