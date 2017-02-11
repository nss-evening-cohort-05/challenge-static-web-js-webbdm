// Variables & Object Function


var heightElement = document.getElementById("height");
var charElement = document.getElementById("character");

var tree ;

function treeValues(keypress){

	tree = {height: heightElement.value, character: charElement.value};

    if(keypress.keyCode === 13) { 
        
    	
            if (tree.height === "" || tree.character === "") {

            alert("Can't build yo Tree without both parameters");

    }
    branchAdder(tree);
  }
}

function branchAdder (tree) {
  treeBranch = "";

  //"Master" Loop that contains the Space and Character loops that build the branch 
  for (var h=0; h <= tree.height; h++){

  		for (var i=h; i < tree.height; i++){

  			treeBranch += " ";

  		}
  		// Character loop uses (*2-1) to center on the "trunk" with and odd number
  		for (var j=0; j < h*2-1; j++){

  			treeBranch += tree.character;
  		}

  		treeBranch += "\n";
  	}
  	console.log(treeBranch);
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