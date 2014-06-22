/**
 *  Mocha
 *
 *  Wrapper file for mocha test framework
 *  Create mocha environement, pulls in helper plugins and sets up config
 */
define([
    "jquery",
    "chai",
    "sinon-chai",
    "jquery-chai",
    "third-party/mocha/mocha"
], function($, chai, sinon_chai, jquery_chai) {
    "use strict";

    var mocha = window.mocha,
        parent_levels = window.relative_path,
        is_headless = (window.navigator.userAgent.indexOf("PhantomJS") !== -1),
        phantom_bridge_js = "<script src=\""+parent_levels+"../node_modules/grunt-mocha/phantomjs/bridge.js\" " +
                            "type=\"text/javascript\" charset=\"utf-8\"></script>",
        mocha_css = "<link rel=\"stylesheet\" type=\"text/css\" href=\""+parent_levels+"third-party/mocha/mocha.css\" media=\"all\">",
        mocha_placeholder = "<div id=\"mocha\"></div>";

    // Set up chai with sinon and jquery linking libs
    chai.use(sinon_chai);
    chai.use(jquery_chai);

    // Use chai expect bdd api
    window.expect = chai.expect

    // Add in mocha presentation CSS and div
    $("head").append(mocha_css);
    $("body").append(mocha_placeholder);

    // Insert phantom bridge if running headless
    if (is_headless) {
        $("body").append(phantom_bridge_js);
    }

    // Set up mocha
    mocha.setup({
        ui: "tdd"
    });

    return mocha;
});