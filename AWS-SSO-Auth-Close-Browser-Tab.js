// ==UserScript==
// @name         AWS-SSO-Auth-Close-Browser-Tab
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This script is useful with AWS SSO cli tools, where it opens a browser tab to perform authentication. 
// @description  This script automatically closes the tab on successful finish.
// @author       You
// @icon         https://www.google.com/s2/favicons?domain=userscript.zone
// @include      https://d-906769c34d.awsapps.com/*
// @run-at       document-end
// @version      0.0.1
// @license      MIT
// @noframes
// @grant window.close
// @grant window.focus
// ==/UserScript==

(function() {
    'use strict';

switch (location.pathname) {
    case "/start/user-consent/authorize.html":
        var evt = document.createEvent ("HTMLEvents");
        evt.initEvent ("click", true, true);
        document.getElementById('cli_login_button').dispatchEvent (evt);
        break;
    case "/start/user-consent/login-success.html":
        window.close()
        break;
    default:
        console.log("default case executed.. nothing happens");
}

})();
