define(
[
    "sinon",
    "src/app"
],
function (sinon, app) {
    "use strict";

    var env;

    suite("App", function() {
        setup(function() {
            env = {};
            env.sb = sinon.sandbox.create();
        });

        teardown(function() {
            env.sb.restore();
        });

        test("should be an object", function() {
            expect(app).to.be.an("object");
        });

    });
});