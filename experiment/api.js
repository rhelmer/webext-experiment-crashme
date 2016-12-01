"use strict";

const Cc = Components.classes;
const Ci = Components.interfaces;
const Cr = Components.results;
const Cu = Components.utils;

const DEBUG_CONTRACTID = "@mozilla.org/xpcom/debug;1";

class API extends ExtensionAPI {
  getAPI(context) {
    return {
      crash: {
        abort() {
          let debug = Cc[DEBUG_CONTRACTID].getService(Ci.nsIDebug2);
          debug.abort(0,0);
        },
      },
    };
  }
}
