/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare a varible named 'animal' assigned to an empty object
var animal = {};

// Using dot notation give animal a property named species with a value of any animal species.
animal.species = "Hedgehog";

// Using bracket notation give animal a property called name with a value of your animal`s name.

animal['name'] = "Sonic";

//Using either notation, give animal a property called noises with a value of empty array.

animal.noises = [];

// Print your animal Object to the console by adding, console.log(animal);,
console.log(animal);




//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];

//Using bracket notation give noises it’s first element. A string representing a sound your animal might make.
noises[0] = "snarling";

//Using an array function add another noise to the end of noises.
noises.push("clicking");

//Add an element to noises using unshift to add to the begining of the array.
noises.unshift("growl");

//Add another element to the end of array thats not hard coded using a bracket syntax.
noises[noises.length] = "purring";

//console.log the length of noises
console.log(noises.length);

//console.log the last element in noises again without hard coding the index.
console.log(3);

//console.log the whole array.
console.log(noises);





//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Using bracket syntax, assign the noises property on animal to our new noises array.
animal.noises = noises;

//Using any syntax add another noise to the noises property on animal.
noises[4] = "whistling";

//console.log animal.
console.log(animal);





/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a variable named animals and assign it to an empty array.
var animals = [];

//push our animal that we created to animals.
animals.push(animal);

//console.log animals.
console.log(animals);

//Create a variable called duck and assign it to the data:
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};

//push duck to animals
animals.push(duck);

//console.log animals
console.log(animals);

//Create two more animal objects and add to animals
var dolphin = {
    species: 'cetaceans',
    name: 'Ecco',
    noises: ['squeaks', 'whistling']
};

var bear = {
    species: 'Ursus arctos',
    name: 'Yogi',
    noises: ['growl', 'whimper']
};

animals.push(bear);
animals.push(dolphin);
console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
//An array can hold a list of data

/*Write a function called getRandom that takes our animals 
array and returns a random index of the input array, using Math.random
*/
function getRandom(animals) {
    for (var i = 0; i< animals.length; i++) {
        return Math.floor(Math.random(animals.length));
    }
}

/*Using a random index from this function that you just
 created, get a random animal and add its name to friends.
 */
 friends.push(bear['name']);
 animals[getRandom(animals)].friends = friends;
 console.log(friends);
 
 
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}