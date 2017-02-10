// Variables & Objects 


var heightElement = document.getElementById("height");
var charElement = document.getElementById("character");


var tree = {
  
    height: heightElement.value,
    character: charElement.value
}


// var heightInput = heightElement.value;
// var charInput = charElement.value;


// Functions

function keyEnter(keypress) {
  
  if(keypress.keyCode === 13) { 
    
        console.log();        
    }
}


// Listeners

charElement.addEventListener("keypress", keyEnter);
heightElement.addEventListener("keypress", keyEnter);