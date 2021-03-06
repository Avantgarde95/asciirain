'use strict';

function getAllElements(className) {
    return document.getElementsByClassName(className);
}

function getElement(className) {
    return getAllElements(className)[0];
}

function chooseRandomInteger(min, limit) {
    return Math.floor(Math.random() * (limit - min)) + min;
}

function loadImage(src, onLoad) {
    var image = new Image();

    image.addEventListener('load', function () {
        onLoad(image);
    });

    image.src = src;
}

function getImagePixels(image, width, height) {
    var canvas = document.createElement('canvas'),
        context = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;

    context.drawImage(
        image,
        0, 0, image.naturalWidth, image.naturalHeight,
        0, 0, canvas.width, canvas.height
    );

    return context.getImageData(0, 0, canvas.width, canvas.height).data;
}
