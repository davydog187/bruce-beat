var app = require("koa")();
var serve = require("koa-static");
var router = require("koa-route");



app.use(serve(__dirname + "/html"));
app.use(serve(__dirname + "/client"));

app.listen(8080);

console.log("bruce beat is running, bitches");
