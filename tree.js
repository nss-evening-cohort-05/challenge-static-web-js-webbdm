// Variables & Objects 

var heightElement = documentGetElementById("height");
var charElement = documentGetElementById("character");

var heightInput;
var charInput;

// var heightInput = heightElement.value;
// var charInput = charElement.value;

var tree = {
  
    height: "heightInput",
    character: "charInput"
  
}



// Functions

function keyEnter(key) {
  
  if(event.keyCode == 13) { 
    
        console.log(heightInput, charInput);        
    }
}

// Listeners