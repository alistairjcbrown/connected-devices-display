/**
 *  Backbone
 *
 *  Wrapper file for backbone lib
 *  This gets backbone off the global scope and sets jquery version
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