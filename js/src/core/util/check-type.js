/**
 *  Check Type
 *
 *  Wrapper file for check-type lib
 *  This initialises check-type with lodash and provides a location for
 *  creating  custom type checking functions.
 */
define(["lodash", "third-party/check-type/check-type.min"], function(_, check) {
    "use strict";

    var custom_checks = {};

    // -- Start custom check functions

    custom_checks.isNonEmptyString = function(value) {
        return check(value).is("string") && check(value).is.not("empty");
    };

    // -- End custom check functions

    check.init(_)
         .init(custom_checks);

    return check;
});