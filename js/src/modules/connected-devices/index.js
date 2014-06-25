/**
 *  Connected Devices
 *
 *  Connected Devices module
 *  Backbone view which ????
 */
 define([
    "jquery",
    "lodash",
    "backbone",
    "check-type",
    "modules/connected-devices/collections/devices.collection",
    "modules/connected-devices/views/online-users.view",
    "modules/connected-devices/views/streaming-devices.view",
    "hbs!modules/connected-devices/templates/device",
    "hbs!modules/connected-devices/templates/heading"
], function(
    $,
    _,
    Backbone,
    check,
    DeviceCollection,
    OnlineUsersView,
    StreamingDevicesView,
    device_template,
    heading_template
) {
    "use strict";

    var ConnectedDevices = Backbone.View.extend({

        // Set up containers
        Views: {
            OnlineUsersView: OnlineUsersView,
            StreamingDevicesView: StreamingDevicesView
        },
        templates: {
            heading: heading_template,
            device: device_template
        },
        views: null,


        // --- Public functions

        /*
         *
         *
         */
        initialize: function(options) {

            var device_list = this._generateDeviceList(options.data);

            // Create device collection
            this.collection = new DeviceCollection(device_list);
            this.views = {};

            // Create each view
            _.each(this.Views, function(View, view_name) {
                this.views[view_name] = new View({
                    collection: this.collection,
                    $app_el: $(".js-app"),
                    templates: this.templates
                });
            }, this);
        },


        /*
         *
         *
         */
        render: function() {
            _.each(this.views, function(view) {
                view.render();
            }, this);

            return this;
        },


        /*
         *
         *
         */
        destroy: function() {
            _.invoke(this.collection.toArray(), "destroy");
            delete this.collection;

            _.each(this.views, function(view) {
                view.remove();
            }, this);

            this.views = {};

            return this;
        },

        // --- Private functions

        /*
         *
         *
         */
        _generateDeviceList: function(device_data) {
            var device_list = [];

            _.each(device_data, function(device_type_list, type) {
                _.each(device_type_list, function(device) {
                    device.connected = (type === "connected");
                    device_list.push(device);
                }, this);
            }, this);

            return device_list;
        }

    });

    return ConnectedDevices;

});