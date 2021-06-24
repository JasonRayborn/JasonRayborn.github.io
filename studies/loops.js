/*Loops*/

/* Loops are used to repeatedly run a block of code -
until a certain condition is met.
* When developers talk about iteration or iterating
over, say, an array, it is the same as looping.
* JavaScript offers several options to repeatedly
run a block of code, including while, do while, for and 
for- in.
*/

/*While Loop*/
/*The while loop, loops through a block of code as long as a specified
condition is true.*/
/*While Loop example*/
let i = 0;
let  sum = 0;
while (i < 10) { 
      sum += i;
      i++;
}
console.log(sum); //45

/*For Loop*/
/*The for loops through a block of code a certain number of times*/
/*For Loop example*/
for (let i = 0; i < 4; i++) {
    console.log(i); // 0, 1, 2, 3
}


/*Counting Backwards*/
for (let i = 4; i >= 0; i--) {
  console.log(i) // 4, 3, 2, 1,0
 

}
/*For-In Loops*/
/* The for-in loop loops through the properties of an object.*/
/*Object:
*/
// 
var obj = {
    title: "No Son of Mines",
    artist: "Genesis", 
    year : 1991
};

for (var key in obj) {
    console.log(obj[key]); 
}
/* prints to the console:
*    "No Son of Mines"
*    "Genesis"
*    "1991" */


//Looping over an array forwards//
var arr = [1,2,3];
for (let  i = 0; i < arr.length; i++){
    console.log(i);
}  
//outputs 0, 1, 2

//Looping over and array backwards//
var arr = [1,2,3,4,5]; 
for (let i = arr.length - 1; i >=0 ; i--) {
    console.log(arr[i]); 
}
//outputs 5,4,3,2,1 


/* So when would you use a while loop instead of a for loop?
* You would use while loop if you want an action to repeat itself until 
* a certain condition is met. A for loop would be used when you want to 
* iterate/loop through an object.
*/

