"use strict";

var Promise = require("bluebird");
var InstagramClient = require("instagram-node-lib");

function askforPopularData() {
    return new Promise(function(resolve) {
        InstagramClient.media.popular({
            complete: function(data){
                return resolve(data);
            }
        });

    });
}

function *imageRouter(query) {
    var instagramData = yield askforPopularData();
    this.body = {
        images: instagramData
    };
}

module.exports = imageRouter;
