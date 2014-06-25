/*
 *
 *
 *
 */

define([
    "jquery",
    "underscore",
    "backbone",
    "check-type",
    "modules/connected-devices/collections/devices.collection",
    "../../../../../data/device-profiles"
], function(
    $,
    _,
    Backbone,
    check,
    DeviceCollection,
    device_profiles_data
) {
    "use strict";

    var StreamingDevicesView = Backbone.View.extend({

        tagName: "section",
        className: "streaming-devices",
        section_heading: "Streaming Devices",

        // Conditions to filter the passed collection
        filter_conditions: {
            device_list: [
                "A2:98:BC:76:DE:54", // Roku
                "A9:98:BC:76:DE:54", // Xbox
                "A3:98:BC:76:DE:54", // WDTV
                "A8:98:BC:76:DE:54"  // Samsung TV
            ]
        },


        /*
         *
         *
         */
        initialize: function(args) {
            this.$app_el = args.$app_el;
            this.templates = args.templates;

            // Filter the incoming collection
            this.collection = new DeviceCollection(
                args.collection.filter(function(model) {
                    var mac_address = model.get("mac_address");
                    return this.filter_conditions.device_list.indexOf(mac_address) !== -1;
                }, this)
            );

            // Data
            this.device_profiles = device_profiles_data;
        },


        /*
         *
         *
         */
        render: function() {
            var heading = this.templates.heading({
                section_heading: this.section_heading
            });
            this.$el.append(heading);

            this.collection.each(function(model) {
                var device_profile = this.device_profiles[model.get("mac_address")],
                    unknown_device = "unknown",
                    connected_device_html;

                if (check(device_profile).is("undefined")) {
                    device_profile = this.device_profiles[unknown_device];
                    device_profile.user_name = model.get("device_name");
                }

                device_profile = _.extend({}, model.toJSON(), device_profile);

                connected_device_html = this.templates.device(device_profile);
                this.$el.append(connected_device_html);
            }, this);

            this.$app_el.append(this.$el);
        },


        /*
         *
         *
         */
        remove: function() {
            _.invoke(this.collection.toArray(), "destroy");
            StreamingDevicesView.__super__.remove.call(this);
        }

    });

    // Expose
    return StreamingDevicesView;

});