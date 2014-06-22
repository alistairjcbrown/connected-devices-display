/**
 *  Test Runner
 *
 *  Sets up the test environment using global variables and runs tests
 */
define([ "../src/require.config" ], function() {
    "use strict";

    var path = window.relative_path,
        test_files = window.test_files;

    require.config({
        baseUrl: path
    });

    require([ "mocha" ], function(mocha) {
        require(test_files, function() {
            mocha.run();
        });
    });
});