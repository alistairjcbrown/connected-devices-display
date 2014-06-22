define(
[
    "sinon",
    "chai",
    "check-type"
],
function (sinon, chai, check) {
    "use strict";

    var expect = chai.expect,
        env;

    suite("Check-type", function() {
        setup(function() {
            env = {};
            env.sb = sinon.sandbox.create();
        });

        teardown(function() {
            env.sb.restore();
        });

        test("should be a function", function() {
            expect(check).to.be.a("function");
        });

        suite("Non Empty String", function() {

            test("should return false for value which is not type string", function() {
                expect(check({ hello: "world" }).is("nonEmptyString")).to.be.false;
                expect(check([ 1, 2, 3 ]).is("nonEmptyString")).to.be.false;
                expect(check(123).is("nonEmptyString")).to.be.false;
            });

            test("should return false for value which is empty string", function() {
                expect(check("").is("nonEmptyString")).to.be.false;
            });

            test("should return true for value which is non-empty string", function() {
                expect(check("123").is("nonEmptyString")).to.be.true;
            });

        });

    });
});