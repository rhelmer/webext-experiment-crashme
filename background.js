"use strict";

/* global browser */

browser.browserAction.onClicked.addListener(() => {
  console.log("about to crash...");
  let crash = browser.experiments.crash.abort();
  crash.then(message =>
    console.log("SHOULD NOT RUN, already crashed", message));
});
