"use strict";

/* global browser */

browser.browserAction.onClicked.addListener(() => {
  browser.crash.abort().then(
    message => console.log("SHOULD NOT RUN, already crashed", message)
  );
});
