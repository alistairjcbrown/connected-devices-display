/**
 *  App
 *
 *  Root application file.
 *  Load main controllers here.
 */
 define([ "jquery", "modules/example/index" ], function($, Example) {
    "use strict";

    var app = {};

    app.init = function() {
        var $app_el = $(".js-app");

        if ($app_el.length < 1) {
            throw new Error("Placeholder element is not available");
        }

        this.example = new Example({
            el: $app_el.get(0)
        });

        this.example.render();

        return true;
    };

    return app;

});