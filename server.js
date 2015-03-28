"use strict";

var app = require("koa")();
var serve = require("koa-static");
var router = require("koa-route");

var PORT = 8080;

function makeRelative(path) {
    return __dirname + "/" + path;
}

app.use(serve(makeRelative("html")));
app.use(serve(makeRelative("client")));

app.listen(PORT);

console.log("bruce beat is running on", PORT, "bitches");
