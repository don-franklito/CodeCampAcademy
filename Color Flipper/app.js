const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const rgb = document.querySelector(".rgb");


btn.addEventListener('click', function () {
    let r = random(0, 255), 
        g = random(0, 255), 
        b = random(0, 255);

    let hexColor = rgbToHex(r, g, b);
    /* console.info('Hex: ' + hexColor);
    console.info('rgb(' + r + ', ' 
                        + g + ', ' 
                        + b + ')'); */
    let rgbColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    document.body.style.backgroundColor = hexColor;
    color.textContent =  hexColor;
    color.style.color = hexColor;
    rgb.textContent =  rgbColor;
    rgb.style.color = rgbColor;
});

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function rgbToHex (r, g, b) {
    return "#" + ColorToHex(r) + ColorToHex(g) + ColorToHex(b);
}