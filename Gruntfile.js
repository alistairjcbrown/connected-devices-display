/*
 * Grunt file
 *
 * - Run JSHint
 * - Run Mocha tests
 *
 * @author Alistair Brown <github@alistairjcbrown.com>
 */

module.exports = function(grunt) {
    "use strict";

    var generate_path_matches = function(extension) {
        var base = [
            "./js/*{extension}",
            "./js/**/*{extension}",
            "!./js/*.min{extension}",
            "!./js/third-party/**/*{extension}",
            "!./js/**/third-party/**/*{extension}",
            "!./js/.git/"
        ];

        base.forEach(function(element, index, array) {
            array[index] = element.replace("{extension}", extension);
        });

        return base;
    },
    jshint, mocha_browser, requirejs, keybase_dir;

    // ------

    // Strict JSHint rules
    jshint = {
        "all": generate_path_matches(".js"),
        "options": {
            "curly":      true,
            "devel":      false,
            "eqeqeq":     true,
            "eqnull":     true,
            "expr":       true,
            "immed":      true,
            "indent":     4,
            "latedef":    true,
            "maxdepth":   3,
            "maxlen":     140,
            "maxparams":  10,
            "newcap":     true,
            "noarg":      true,
            "noempty":    true,
            "quotmark":   "double",
            "strict":     true,
            "trailing":   true,
            "undef":      true,
            "unused":     true,
            "globals": {
                // Test globals
                "define":    true,
                "module":    true,
                "require":   true,
                "mocha":     true,
                "expect":    true,
                "suite":     true,
                "test":      true,
                "setup":     true,
                "teardown":  true,

                // Env globals
                "window":    true,
                "process":   true,
                "__dirname": true
            }
        }
    };

    // Run mocha tests in browser
    mocha_browser = {
        "test": {
            "src": generate_path_matches(".test.html"),
            "options": {
                "reporter": "Spec",
                "ui":       "tdd",
                // "log":      true
            }
        }
    };

    requirejs = {
        "compile": {
            "options": {
                "name": "third-party/almond/almond",
                "baseUrl": "js",
                "paths": {
                    "require.config": "src/require.config"
                },
                "mainConfigFile": "js/src/require.config.js",
                "include": ['src/main'],
                "insertRequire": ['src/main'],
                "wrap": true,
                "preserveLicenseComments": true,
                "optimize": "uglify",
                "out": "js/app.min.js",
                "useStrict": false,
                "findNestedDependencies": true,
                "done": function(done, output) {
                    var duplicates = require('rjs-build-analysis').duplicates(output);

                    if (duplicates.length > 0) {
                        grunt.log.subhead('Duplicates found in requirejs build:');
                        grunt.log.warn(duplicates);
                        done(new Error('r.js built duplicate modules, please check the excludes option.'));
                    }

                    done();
                }
            }
        }
    };

    keybase_dir = {
        sign:{},
        verify:{},
    };

    grunt.initConfig({
        "pkg":          grunt.file.readJSON("package.json"),
        "jshint":       jshint,
        "mocha":        mocha_browser,
        "requirejs":    requirejs,
        "keybase_dir":  keybase_dir,
    });

    // Load Tasks
    require("load-grunt-tasks")(grunt);

    // Define tasks
    grunt.registerTask("test",    [ "keybase_dir:verify", "go" ]);
    grunt.registerTask("go",      [ "jshint", "mocha" ]);
    grunt.registerTask("build",   [ "go", "requirejs", "keybase_dir:sign" ]);
    grunt.registerTask("default", [ "go" ]);

};

// End of file