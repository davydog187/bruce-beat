"use strict";

var gulp = require("gulp");
var nodemon = require("gulp-nodemon");

gulp.task("default", function() {
  nodemon({
      script: "server.js",
      ext: 'html js',
      execMap: {
          js: "node --harmony"
      }
  })
  .on("restart", function () {
      console.log("restarting server!")
  });
});
