let counter = 1;
setInterval(function(){
document.getElementById('radio' + counter).checked = true;
counter++;
if(counter > 4) {
    counter = 1; //returns to the first image
}
}, 6000);