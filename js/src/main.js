/**
 *  Main File
 *
 *  This file acts like a boot.
 *  Set the configuration and calls the main application file
 *  This file shouldn't need edited.
 */
require([ "require.config" ], function() {
	"use strict";

    // Now run application
	require(["src/app"]);
});