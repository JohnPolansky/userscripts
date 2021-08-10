// ==UserScript==
// @name         AWS-SSO-Console-User-Title-Fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  With AWS SSO the AWS Console Title is ridiculously long, this aims to shorten and list the account name
// @author       John Polansky
// @icon         https://www.google.com/s2/favicons?domain=userscript.zone
// @include      https://console.aws.amazon.*
// @include      https://*.console.aws.amazon.*
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
    // The ClassName might change with updates, find the title in inspect and replace it here
    let str = document.getElementsByClassName("ThRjn7o-KwO0459UzmvoU")[0].title
    let re = /\w+_(\w+)_(\w+)\/(.*)\s+@\s+(.+)/
    let results = re.exec(str)
    let role = results[1]
    let username = results[3].replace(/@.*$/, "")
    let account = results[4]
    document.getElementsByClassName("ThRjn7o-KwO0459UzmvoU")[0].innerHTML = `${account} / ${role} / ${username}`
})();
