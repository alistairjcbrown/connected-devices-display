/**
 *  Lo-Dash
 *
 *  Wrapper file for lo-dash lib
 *  This gets lo-dash off the global scope
 */
define([ "third-party/lodash/dist/lodash.min" ], function(lodash) {
    "use strict";

    lodash = lodash.noConflict();

    // If it's still global after noConflict, then there was no previous value
    if (window._ === lodash) {
        delete window._;
    }

    return lodash;
});