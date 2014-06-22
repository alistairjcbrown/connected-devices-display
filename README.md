# Base JS App

[![Build Status](https://travis-ci.org/alistairjcbrown/base-js-app.svg?branch=master)](https://travis-ci.org/alistairjcbrown/base-js-app)
[![devDependency Status](https://david-dm.org/alistairjcbrown/base-js-app/dev-status.svg?theme=shields.io)](https://david-dm.org/alistairjcbrown/base-js-app#info=devDependencies)

---

A basic starting point for building a JS app.

 - Third party modules are provided via bower
 - Modules are loaded via RequireJS
 - Testing is provided via Mocha, Chai and Sinon
 - Checks and build are provided via Grunt
 - Application structure is provided via BackboneJS

## Install

```
npm install   # Install build dependencies
bower install # Install app dependencies
grunt build   # Test and build the minified app
```

## Testing

```
grunt go    # Runs linting and tests
# - or -
grunt test  # Runs only tests
```

## Using

 - Add new modules in `js/src/modules/{module_name}`
    - Add tests in `js/tests/modules/{module_name}`
    - Copy the test html file from `js/tests/modules/example/index.test.html`
        - Edit this html file to specify the new test files to run

## Adding a new lib

 - Install from bower - `bower install {lib_name} --save`
 - Update `require.config.js` with a reference from lib name to file location
    - If the lib is non-AMD, consider creating a shim fle in `js/src/core/shim` to remove the lib from the global scope