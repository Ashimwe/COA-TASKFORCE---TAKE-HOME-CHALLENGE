//Assigning HTML elements contents to javaScript variables.
const imageContainer1 = document.getElementById("imageContainer1");
const imageContainer2 = document.getElementById("imageContainer2");
const imageContainer3 = document.getElementById("imageContainer3");
const imageContainer4 = document.getElementById("imageContainer4");

//actions when user hovers the 1st image.
function hover1(){
    const img = document.querySelector('#imageContainer1 img');
    const hidden = document.querySelector("#imageContainer1 .hidden");
    const overlay = document.querySelector("#imageContainer1 .overlay");
    img.style.filter =  "grayscale(100%) blur(5px)";
    img.style.transform = "scale(0.98)";
    hidden.style.visibility = "visible";
    overlay.style.bottom = "60px";
};
//actions when user removes cursor from the 1st image.
function unhover1(){
    const img = document.querySelector('#imageContainer1 img');
    const hidden = document.querySelector("#imageContainer1 .hidden");
    const overlay = document.querySelector("#imageContainer1 .overlay");
    img.style.filter = "none";
    img.style.transform = "scale(1)";
    hidden.style.visibility = "hidden";
    overlay.style.bottom = "40px";
};

//actions when user hovers the 2nd image.
function hover2(){
    const img = document.querySelector('#imageContainer2 img');
    const hidden = document.querySelector("#imageContainer2 .hidden");
    const overlay = document.querySelector("#imageContainer2 .overlay");
    img.style.filter =  "grayscale(100%) blur(5px)";
    img.style.transform = "scale(0.98)";
    hidden.style.visibility = "visible";
    overlay.style.bottom = "60px";
};

//actions when user removes cursor from the 2nd image.
function unhover2(){
    const img = document.querySelector('#imageContainer2 img');
    const hidden = document.querySelector("#imageContainer2 .hidden");
    const overlay = document.querySelector("#imageContainer2 .overlay");
    img.style.filter = "none";
    img.style.transform = "scale(1)";
    hidden.style.visibility = "hidden";
    overlay.style.bottom = "40px";
};

//actions when user hovers the 3rd image.
function hover3(){
    const img = document.querySelector('#imageContainer3 img');
    const hidden = document.querySelector("#imageContainer3 .hidden");
    const overlay = document.querySelector("#imageContainer3 .overlay");
    img.style.filter =  "grayscale(100%) blur(5px)";
    img.style.transform = "scale(0.98)";
    hidden.style.visibility = "visible";
    overlay.style.bottom = "60px";
};
//actions when user removes cursor from the 3rd image.
function unhover3(){
    const img = document.querySelector('#imageContainer3 img');
    const hidden = document.querySelector("#imageContainer3 .hidden");
    const overlay = document.querySelector("#imageContainer3 .overlay");
    img.style.filter = "none";
    img.style.transform = "scale(1)";
    hidden.style.visibility = "hidden";
    overlay.style.bottom = "40px";
};

//actions when user hovers over the 4th image.
function hover4(){
    const img = document.querySelector('#imageContainer4 img');
    const hidden = document.querySelector("#imageContainer4 .hidden");
    const overlay = document.querySelector("#imageContainer4 .overlay");
    img.style.filter =  "grayscale(100%) blur(5px)";
    img.style.transform = "scale(0.98)";
    hidden.style.visibility = "visible";
    overlay.style.bottom = "60px";
};

//actions when user removes cursor from  the 4th image.
function unhover4(){
    const img = document.querySelector('#imageContainer4 img');
    const hidden = document.querySelector("#imageContainer4 .hidden");
    const overlay = document.querySelector("#imageContainer4 .overlay");
    img.style.filter = "none";
    img.style.transform = "scale(1)";
    hidden.style.visibility = "hidden";
    overlay.style.bottom = "40px";
};

//Calling the functions.
imageContainer1.addEventListener('mouseover',hover1);
imageContainer1.addEventListener('mouseout',unhover1);
imageContainer2.addEventListener('mouseover',hover2);
imageContainer2.addEventListener('mouseout',unhover2);
imageContainer3.addEventListener('mouseover',hover3);
imageContainer3.addEventListener('mouseout',unhover3);
imageContainer4.addEventListener('mouseover',hover4);
imageContainer4.addEventListener('mouseout',unhover4);