let counter = 1;
setInterval(function(){
document.getElementById('radio' + counter).checked = true;
counter++;
if(counter > 4) {
    counter = 1; //returns to the first image, when it is approaches the last image
}
}, 4500); // time to change picture to another