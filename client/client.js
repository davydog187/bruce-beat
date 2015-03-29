"use strict";

function createTone(note) {
    return new Tone.Oscillator(note).toMaster();
}

var noteToTone = {
    "c4": createTone("c4"),
    "d4": createTone("d4"),
    "e4": createTone("e4"),
    "g4": createTone("g4"),
    "a4": createTone("a4"),
    "c5": createTone("c5")
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

function playTone(tone) {
    tone.start();
    tone.stop("+0.5");
}

function showImage($container, imageMarkup) {
    $container.html(imageMarkup);
}

$(function(){
    console.log("starting client application...");
    fetchData(function(data) {
        console.log("got data: ", data);

        var notes = getNotesFromImages(data.images);
        var index = 0;
        var length = notes.length;

        var $imageContainer = $(".images-container");

        setInterval(function() {
            if (index < length) {
                console.log("playing: ", notes[index]);
                var note = notes[index];
                showImage($imageContainer, data.images[index].markup);
                playTone(noteToTone[note]);
                ++index;
            }
        }, 500);
    })
});
