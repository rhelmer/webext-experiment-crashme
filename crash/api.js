"use strict";

/* global Components, ExtensionAPI */
const Cc = Components.classes;
const Ci = Components.interfaces;

const DEBUG_CONTRACTID = "@mozilla.org/xpcom/debug;1";

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "API" }] */
class API extends ExtensionAPI {
  getAPI() {
    return {
      crash: {
        abort() {
          let debug = Cc[DEBUG_CONTRACTID].getService(Ci.nsIDebug2);
          debug.abort(0, 0);
        },
      },
    };
  }
}