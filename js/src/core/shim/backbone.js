/**
 *  Lo-Dash
 *
 *  Wrapper file for lo-dash lib
 *  This gets lo-dash off the global scope
 */
define([ "jquery", "third-party/backbone/backbone" ], function(jquery, backbone) {
    "use strict";

    backbone = backbone.noConflict();

    // // If it's still global after noConflict, then there was no previous value
    if (window.Backbone === backbone) {
        delete window.Backbone;
    }

    // Use internal jquery
    backbone.$ = jquery;

    return backbone;
});