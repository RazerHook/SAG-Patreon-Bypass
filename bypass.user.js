// ==UserScript==
// @name         SAG Patreon Bypass
// @namespace    https://github.com/RazerHook
// @version      1.2
// @description  Bypass the patreon check on Steam Account Generator
// @author       RazerHook
// @match        https://accgen.cathook.club/custom_gen.html
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    $('#patreon_signin').html('Bypass by <a href="https://razerhook.ml">RazerHook.ML</a> Team! Get good, Get RazerHook!')
    setTimeout(() => {
        $('#accgen_ui').show()
        $('#generate_button').show()
        $('#history_button').show()
    }, 500)
})();
