/**
 *  App
 *
 *  Root application file.
 *  Load main controllers here.
 */
 define([
    "jquery",
    "modules/connected-devices/index"
], function(
    $,
    ConnectedDevices
) {
    "use strict";

    var app = {};

    app.init = function() {
        var $app_el = $(".js-app");

        if ($app_el.length < 1) {
            throw new Error("Placeholder element is not available");
        }

        // Pull down JSON data
        var connected_devices = $.getJSON("data/connected-devices.json", { cache: + new Date() });

        $.when(connected_devices)
         .then(function(connected_devices_data) {

            var connected_devices = new ConnectedDevices({
                el: $app_el.get(0),
                data: connected_devices_data
            });

            connected_devices.render();

        }, function() {
            window.console.error("An error has occurred requesting init data", arguments);
        });

        return true;
    };

    return app;

});