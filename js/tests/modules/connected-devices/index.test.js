define(
[
    "sinon",
    "modules/connected-devices/index"
],
function (sinon, ConnectedDevices) {
    "use strict";

    var env;

    suite("Connected Devices Module", function() {
        setup(function() {
            env = {};
            env.sb = sinon.sandbox.create();
        });

        teardown(function() {
            env.sb.restore();
        });

        test("should be a function", function() {
            expect(ConnectedDevices).to.be.a("function");
        });

    });
});