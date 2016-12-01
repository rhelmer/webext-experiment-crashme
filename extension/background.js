"use strict";

/* global browser */

browser.browserAction.onClicked.addListener(() => {
  browser.crash.abort();
});
