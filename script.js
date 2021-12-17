var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");


function convertToHex(color) {
    var col = "";
    for (var i = 0; i < color.length; i++) {
        if (color[i] >= '0' && color[i] <= '9') {
            col = col + color[i];
        }
    }
    var hex = Number(col).toString(16);
    if (hex.length == 1) {
        hex = "0" + hex;
    }
    return hex;
}


function hexFormat(color) {
    var rgbs = color.split(",");
    var r = convertToHex(rgbs[0]);
    var g = convertToHex(rgbs[1]);
    var b = convertToHex(rgbs[2]);
    return "#" + r + g + b;
}


function setOnloadColorInputs() {
    var style = window.getComputedStyle(body);
    var colorsUsed = style.getPropertyValue('background-image');
    var colourList = colorsUsed.split("rgb");
    var col1 = colourList[1];
    var col2 = colourList[2];
    inputColor1 = hexFormat(col1);
    inputColor2 = hexFormat(col2);
    color1.value = inputColor1;
    color2.value = inputColor2;
}


function setGradient() {
    body.style.background = "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
    css.textContent = body.style.background + ";";
}


function generateRandomColor() {
    var r = Math.floor(Math.random() * 256).toString(16);
    var g = Math.floor(Math.random() * 256).toString(16);
    var b = Math.floor(Math.random() * 256).toString(16);
    if(r.length == 1) {
        r = "0" + r;
    }
    if(g.length == 1) {
        g = "0" + g;
    }
    if(b.length == 1) {
        b = "0" + b;
    }
    return "#" + r + g + b;
}


function setRandomGradient() {
    var col1 = generateRandomColor();
    var col2 = generateRandomColor();
    color1.value = col1;
    color2.value = col2;
    setGradient();
}


function setOnloadPage() {
    setOnloadColorInputs();
    setGradient();
}

setOnloadPage();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);
