/**
 *  Underscore
 *
 *  Wrapper file for undercore lib
 *  This gets underscore off the global scope
 */
define([ "third-party/underscore/underscore" ], function() {
    "use strict";

    var underscore = window._.noConflict();

    // If it's still global after noConflict, then there was no previous value
    if (window._ === underscore) {
        delete window._;
    }

    return underscore;
});