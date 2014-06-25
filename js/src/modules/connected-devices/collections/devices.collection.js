/*
 *
 *
 *
 */

define([
    "backbone",
    "underscore",
    "check-type",
    "../../../../../data/device-values"
], function(
    Backbone,
    _,
    check,
    device_values_data
) {
    "use strict";

    var DeviceCollection = Backbone.Collection.extend({

        initialize: function(models) {
            _.each(models, function(model) {
                var override_values, default_values;

                if ( ! check(model).is("object")) {
                    return;
                }

                default_values = {
                    mobile: false,
                    identifying: false
                };

                if (model.interface === "wireless") {
                    default_values.mobile = true;
                    default_values.identifying = true;
                }

                _.defaults(model, default_values);

                override_values = device_values_data[model.mac_address];
                if (check(override_values).is("object")) {
                    _.extend(model, override_values);
                }
            }, this);
        }

    });

    // Expose
    return DeviceCollection;

});