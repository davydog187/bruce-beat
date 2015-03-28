"use strict";

function *googleImageRouter(query) {
    this.body = {
        images: [{
            path: "https://40.media.tumblr.com/ebbc3bfbf74c28ed5b9ab7a290fd14a1/tumblr_na829gf54W1r5zq6ao3_400.jpg",
            note: "C"
        }, {
            path: "http://ia.media-imdb.com/images/M/MV5BMjAwNTUxMTM4OF5BMl5BanBnXkFtZTcwNjUyNzc4Mg@@._V1_SY317_CR4,0,214,317_AL_.jpg",
            note: "F"
        }]
    };
}

module.exports = googleImageRouter;
