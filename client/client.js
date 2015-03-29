"use strict";

var c = new Tone.Oscillator("c4").toMaster();
var d = new Tone.Oscillator("d4").toMaster();
var e = new Tone.Oscillator("e4").toMaster();
var g = new Tone.Oscillator("g4").toMaster();
var a = new Tone.Oscillator("a4").toMaster();
var highC = new Tone.Oscillator("c5").toMaster();

var noteToTone = {
    "c4": c,
    "d4": d,
    "e4": e,
    "g4": g,
    "a4": a,
    "c5": highC
};

var notes = [
    "c4",
    "d4",
    "e4",
    "g4",
    "a4",
    "c5",
];


function fetchData(callback) {
    $.ajax({
        type: "GET",
        url: "/api/images/test",
        cache: false,
        success: callback
    });
}

function appendImagesToContainer(images) {
    images.forEach(function(image) {
        console.log(image.url);
        $(".images-container").append(image.markup);
    });
}

function urlToNote(url) {
    var total = 0;
    for (var i = 0; i < url.length; ++i) {
        total += url.charCodeAt(i);
    }

    return notes[total % notes.length];
}

function getNotesFromImages(images) {
    return images.map(function(image) {
        return urlToNote(image.url);
    });
}

$(function(){
    console.log("starting client application...");
    fetchData(function(data) {
        console.log("got data: ", data);
        appendImagesToContainer(data.images);
        var notes = getNotesFromImages(data.images);
        var index = 0;
        var length = notes.length;
        setInterval(function() {
            if (index < length) {
                console.log("playing: ", notes[index]);
                noteToTone[notes[index]].start();
                noteToTone[notes[index]].stop("+0.5");
                ++index;
            }
        }, 500);
    })
});

console.log("yooooo");
