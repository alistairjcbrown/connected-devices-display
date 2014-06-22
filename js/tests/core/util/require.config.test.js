define([ "../../../src/require.config" ], function() {
    "use strict";

    // Calling require.config in this way is necessary for the build process
    require.config({
        baseUrl: "../../../"
    });

    require([
        "jquery-chai",
        "sinon-chai",

        "tests/core/util/check-type.test"
    ], function() {
        mocha.run();
    });

});