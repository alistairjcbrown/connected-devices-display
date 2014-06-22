define(function() {
    "use strict";

    // Calling require.config in this way is necessary for the build process
    require.config({

        baseUrl: "./js",
        paths: {
            // Shimmed / Global libs
            //"underscore": "src/core/shim/underscore",
            "lodash-private":     "src/core/shim/lodash",
            "jquery-private":     "src/core/shim/jquery",
            "backbone-private":   "src/core/shim/backbone",

            // AMD libs
            "check-type": "src/core/util/check-type",

            // Testing libs
            "sinon":       "third-party/sinonjs-built/pkg/sinon",
            "chai":        "third-party/chai/chai",
            "sinon-chai":  "third-party/sinon-chai/lib/sinon-chai",
            "jquery-chai":  "third-party/chai-jquery/chai-jquery",

        },
        map: {
            "*": {
                "underscore": "lodash-private",
                "lodash":     "lodash-private",
                "jquery":     "jquery-private",
                "backbone":   "backbone-private"
            }
        },
        urlArgs: "bust=" + (new Date()).getTime() // cache-busting for development

    });

});