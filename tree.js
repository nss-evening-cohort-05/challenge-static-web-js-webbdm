// Variables & Object Function


var heightElement = document.getElementById("height");
var charElement = document.getElementById("character");

var tree = {};


function treeValues(keypress){

  tree = {height: heightElement.value, character: charElement.value};

    if(keypress.keyCode === 13) { 
        
            console.log(tree); 


            if (tree.height === "" || tree.character === "") {

            alert("Can't build yo Tree without both parameters");

    }
  }
}




// var heightInput = heightElement.value;
// var charInput = charElement.value;


// Functions


//This works, but is not needed when you just include it after defining the object values in treeValues
//but it is easily reusable 
// function keyEnter(keypress) {
  
//   if(keypress.keyCode === 13) { 
    
//         console.log('enter was pressed');        
//     }
// }





// Listeners

charElement.addEventListener("keypress", treeValues);
heightElement.addEventListener("keypress", treeValues);