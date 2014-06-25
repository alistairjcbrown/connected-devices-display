define(function() {
    "use strict";

    // Calling require.config in this way is necessary for the build process
    require.config({

        "baseUrl": "js",
        "paths": {
            // Shimmed / Global libs
            //"underscore":     "src/core/shim/underscore",
            "lodash-local":   "src/core/shim/lodash",
            "jquery-local":   "src/core/shim/jquery",
            "backbone-local": "src/core/shim/backbone",

            // AMD libs
            "handlebars": "third-party/handlebars/handlebars.amd.min",
            "hbs":        "third-party/hbs/hbs",
            "check-type": "src/core/util/check-type",
            "modules":    "src/modules",

            // Testing libs
            "mocha-local": "tests/core/shim/mocha",
            "sinon":       "third-party/sinonjs-built/pkg/sinon",
            "chai":        "third-party/chai/chai",
            "sinon-chai":  "third-party/sinon-chai/lib/sinon-chai",
            "jquery-chai": "third-party/chai-jquery/chai-jquery",

        },
        "map": {
            "*": {
                // Mappings for shimmed libs
                "underscore": "lodash-local",
                "lodash":     "lodash-local",
                "jquery":     "jquery-local",
                "backbone":   "backbone-local",

                // Mapping for tests
                "mocha":      "mocha-local",
            }
        },
        "shim": {
            "sinon-chai": {
                "deps": [ "chai" ]
            },
            "jquery-chai": {
                "deps": [ "chai"]
            }
        },

        // Plugins
        "hbs": {
            "disableHelpers":    true,
            "disableI18n":       true,
            "templateExtension": "hbs.html",
            // partialsUrl: ''
        },

        // Development
        "urlArgs": "bust=" + (new Date()).getTime() // cache-busting for development

    });

});