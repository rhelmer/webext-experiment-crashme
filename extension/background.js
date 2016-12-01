"use strict";

browser.browserAction.onClicked.addListener(() => {
  console.log("crashing the browser now...");
  browser.crash.abort();
});
