var sld_red_bg = document.getElementById("red-bg");
var sld_blue_bg = document.getElementById("blue-bg");
var sld_green_bg = document.getElementById("green-bg");

var sld_red_txt = document.getElementById("red-txt");
var sld_blue_txt = document.getElementById("blue-txt");
var sld_green_txt = document.getElementById("green-txt");

var bg = document.getElementById("left");
var txt = document.getElementById("text")

console.log(sld_red);
var red = sld_red.value;

function slide_bg(params) {
    red = sld_red_bg.value;
    blue = sld_blue_bg.value;
    green = sld_green_bg.value;

    bg.style.backgroundColor = "rgb(" + red + " ," + green + " ," + blue + ")";
    
    console.log(red);
    console.log(green);
    console.log(blue);
}

function slide_txt(params) {
    red = sld_red_txt.value;
    blue = sld_blue_txt.value;
    green = sld_green_txt.value;

    txt.style.color = "rgb(" + red + " ," + green + " ," + blue + ")";
    
    console.log(red);
    console.log(green);
    console.log(blue);
}