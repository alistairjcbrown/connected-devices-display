/**
 *  jQuery
 *
 *  Wrapper file for jquery lib
 *  This gets jquery off the global scope
 */
define([ "third-party/jquery/dist/jquery.min" ], function() {
    "use strict";

    var jquery = window.$.noConflict(true);

    // If it's still global after noConflict, then there was no previous value
    if (window.$ === jquery) {
        delete window.$;
    }

    if (window.jQuery === jquery) {
        delete window.jQuery;
    }

    return jquery;
});