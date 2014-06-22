define(
[
    "sinon",
    "jquery",
    "src/app"
],
function (sinon, $, app) {
    "use strict";

    var env;

    suite("App", function() {
        setup(function() {
            env = {};
            env.sb = sinon.sandbox.create();

            $("body").append("<div class=\"js-app\" style=\"display: none;\"></div>");
        });

        teardown(function() {
            env.sb.restore();

            $(".js-app").remove();
        });

        test("should be an object", function() {
            expect(app).to.be.an("object");
        });

        suite("init()", function() {

            test("should be a function", function() {
                expect(app.init).to.be.a("function");
            });

            test("should throw an error if app placeholder element is not available", function() {
                $(".js-app").remove();
                expect(app.init).to.throw(Error);
            });

            test("should return true on success", function() {
                expect(app.init()).to.be.true;
            });
        });

    });
});