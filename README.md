## Crash Me Now!

This is a test WebExtension + Experimental API to crash the browser, for
testing purposes.

## How to install this API and WebExtension

1. Run a non-release build (Nightly or unbranded Beta/Release) version 59
   (or newer) build.
2. Navigate to `about:config` and set the pref `extensions.legacy.enabled` to
   `true`.
3.  Navigate to `about:debugging`, choose
   "Load Temporary Add-on" and select `manifest.json`
   in this project.  You should see a new entry in the list of
   extensions titled "Crash Me Now!".

You should see a new toolbar icon that resembles a bomb.
Click it and your browser will crash by calling `abort()`!
