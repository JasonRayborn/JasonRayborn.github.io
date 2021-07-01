/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name) {
    for (var i = 0; i < animals.length; i++) {
       if (name.toLowerCase() === animals[i].name.toLowerCase()) {
           return animals[i];
       }
    } return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*Write a function declaration called replace with a 
signature of replace(animals, name, replacement) 
*/
function replace(animals, name, replacement) {
    for (var i = 0; i < animals.length; i++) { 
        if (name === animals[i].name) {
            return animals.splice(i, 1, replacement);
        }
    }
}



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Write a function declaration called remove with a signature of remove(animals, name)
function remove(animals, name) {
    //If an animal with that name exists within the animals Array, remove it.
for (var i = 0; i < animals.length; i++) {
    if (name === animals[i].name) {
        return animals.splice(i,1);
    }
}

}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
    if (!search(animals, animal.name)) {
        animals.push(animal);
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
