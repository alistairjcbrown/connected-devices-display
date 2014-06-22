define(
[
    "sinon",
    "modules/example/index"
],
function (sinon, Example) {
    "use strict";

    var env;

    suite("Example Module", function() {
        setup(function() {
            env = {};
            env.sb = sinon.sandbox.create();
        });

        teardown(function() {
            env.sb.restore();
        });

        test("should be a function", function() {
            expect(Example).to.be.a("function");
        });

    });
});