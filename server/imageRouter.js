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
function buildImageFrom(imageSource) {
    return "<img src=\"" + imageSource + "\">"
}

function getImagesFrom(data) {
    return data.map(function(imageData) {
        var imageSource = imageData.images.standard_resolution.url;
        return {
            url: imageSource,
            markup: buildImageFrom(imageSource)
        };
    });
}

function *imageRouter(query) {
    var instagramData = yield askforPopularData();
    this.body = {
        images: getImagesFrom(instagramData)
    };
}

module.exports = imageRouter;
