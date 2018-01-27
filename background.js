"use strict";

/* global browser */

browser.browserAction.onClicked.addListener(() => async function(){
  console.log("about to crash...");
  let message = await browser.experiments.crash.abort();
  console.log("SHOULD NOT RUN, already crashed", message);
});
