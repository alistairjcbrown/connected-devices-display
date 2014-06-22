/**
 *  App
 *
 *  Root application file.
 *  Load main controllers here.
 */
 define([ "check-type", "backbone" ], function(check, backbone) {
    "use strict";

    var app = new function(){};

    backbone;

    window.console.log("Global jQuery?", check(window.$).is.not("undefined"));
    window.console.log("Global Lo-Dash?", check(window._).is.not("undefined"));
    window.console.log("Global Backbone?", check(window.Backbone).is.not("undefined"));

    return app;

});