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

    var OnlineUsersView = Backbone.View.extend({

        tagName: "section",
        className: "online-users",
        section_heading: "Active Users",

        // Conditions to filter the passed collection
        filter_conditions: {
            "connected": true,
            "interface": "wireless",
            "identifying": true
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
                args.collection.where(this.filter_conditions)
            );

            // Data
            this.user_profiles = device_profiles_data;
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
                var user_profile = this.user_profiles[model.get("mac_address")],
                    unknown_device = "unknown",
                    active_user_html;

                if (check(user_profile).is("undefined")) {
                    user_profile = this.user_profiles[unknown_device];
                    user_profile.user_name = model.get("device_name");
                }

                user_profile = _.extend({}, model.toJSON(), user_profile);

                active_user_html = this.templates.device(user_profile);
                this.$el.append(active_user_html);
            }, this);

            this.$app_el.append(this.$el);
        },


        /*
         *
         *
         */
        remove: function() {
            _.invoke(this.collection.toArray(), "destroy");
            OnlineUsersView.__super__.remove.call(this);
        }

    });

    // Expose
    return OnlineUsersView;

});