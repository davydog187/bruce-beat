"use strict";

function toneDeaf(){
    //create one of Tone's built-in synthesizers
    var synth = new Tone.MonoSynth();

    //connect the synth to the master output channel
    synth.toMaster();

    //create a callback which is invoked every quarter note
    Tone.Transport.setInterval(function(time){
        //trigger middle C for the duration of an 8th note
        synth.triggerAttackRelease("C4", "8n", time);
    }, "4n");

    //start the transport
    Tone.Transport.start();
}

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
        $(".images-container").append(image.markup);
    });
}

$(function(){
    console.log("starting client application...");
    fetchData(function(data) {
        console.log("got data: ", data);
        appendImagesToContainer(data.images);
    })
});

console.log("yooooo");
