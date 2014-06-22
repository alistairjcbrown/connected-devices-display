/**
 *  Example
 *
 *  Example module
 *  Backbone view which ????
 */
 define([
    "check-type",
    "backbone",
    "hbs!modules/example/templates/globals"
], function(check, Backbone, global_check) {
    "use strict";

    var Example = Backbone.View.extend({

        render: function() {
            var output = "",
                global_variables = [
                    { name: "jQuery",   symbol: "$" },
                    { name: "Lo-Dash",  symbol: "_" },
                    { name: "Backbone", symbol: "Backbone" }
                ];

            global_variables.forEach(function(global_variable) {
                 output += global_check({
                    name: global_variable.name,
                    present: ""+check(window[global_variable.symbol]).is.not("undefined")
                 });
            });

            this.$el.append(output);
        }

    });

    return Example;

});