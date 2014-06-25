define([], function() {
    "use strict";

    return {

        // ipad is mobile, but not identifying
        "A5:98:BC:76:DE:54": {
            "mobile": true,
            "identifying": false
        },
        // xbox is not mobile and not identifying
        "A9:98:BC:76:DE:54": {
            "mobile": false,
            "identifying": false
        },
        // laptop is somewhat mobile, but not identifying
        "A7:98:BC:76:DE:54": {
            "mobile": true,
            "identifying": false
        }

    };

});