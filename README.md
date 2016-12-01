## Crash Me Now!

This is a test WebExtension + Experimental API to 

## How to install this API and WebExtension

1. Run a non-release build (Nightly or Aurora) version 51 (or newer)
   build and navigate to [about:debugging](about:debugging)
2. Choose "Load Temporary Add-on" and select (a file from) the
   `experiment/` directory in this project.  You should see
   a new entry in the list of extensions titled "Experimental Crash API".
3. Choose "Load Temporary Add-on" and select (a file from) the
   `extension/` directory in this project.  You should see a new entry
   in the list of extensions titled "Crash Me Now!".

You should see a new toolbar icon that resembles a bomb.
Click it and your browser will crash by calling `abort()`!
