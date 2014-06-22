/**
 *  App
 *
 *  Root application file.
 *  Load main controllers here.
 */
 define([ "modules/example/index" ], function(Example) {
    "use strict";

    var app = {};

    app.init = function() {
        var example = new Example();

        example.init();

        return true;
    };

    return app;

});