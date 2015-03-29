"use strict";

var app = require("koa")();
var serve = require("koa-static");
var router = require("koa-route");
var imageRouter = require("./server/imageRouter");
var InstagramClient = require("instagram-node-lib");

var PORT = 8080;

function makeRelative(path) {
    return __dirname + "/" + path;
}

InstagramClient.set("client_id", "8cf2aac31ed9400982c17b07f2354ef6");
InstagramClient.set("client_secret", "39b0d362b8e54839af23666caf6ae29f");

app.use(function *(next) {
    console.log(this.url);
    yield next;
});

app.use(serve(makeRelative("html")));
app.use(serve(makeRelative("client")));
app.use(router.get('/api/images/:query', imageRouter));

app.listen(PORT);

console.log("bruce beat is running on", PORT);
