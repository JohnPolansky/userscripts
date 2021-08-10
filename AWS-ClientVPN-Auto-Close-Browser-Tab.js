
// ==UserScript==
// @name         AWS-ClientVPN-Auto-Close-Browser-Tab
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Simple script that targets the browser tab that AWS ClientVPN opens on authentication and closes it.
// @author       John Polansky
// @icon         https://www.google.com/s2/favicons?domain=userscript.zone
// @include      http://127.0.0.1:35001/
// @run-at       document-end
// @inject-into content
// @version      0.0.1
// @license      MIT
// @noframes
// @grant window.close
// @grant window.focus
// ==/UserScript==


(function() {
    'use strict';

if (document.body.textContent.includes("You may close this window at any time.")) {
  console.log("Safe to close window.. goodbye!")
  window.close()
}
  
})();
