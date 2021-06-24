/* DATATYPES
* Variables are assigned different datatypes. It is good to know the datatype of 
* a variable. Datatypes are not variables as variables are where the value is stored.
* Datatypes are just the type of data that is stored. 
* There are six datatypes that are primitive: Number, String, Boolean,
* Undefined, Null, NaN. There are three datatypes that are complex: array,
* function, and object. 
*/

/* 1. Number
 * Number is just a number. A number can be with or without decimals. 
* For example:
*/
let num1 = 1; // without a decimal
let num2 = 1.25; // with a decimal

/* 2. String
* A string can have zero characters inside of " " or multiple characters such as:
*"This is a string." Strings can be written in single quotes or double quotes.
*For example:
*/
let carNameOne = "Tesla"; // double quotes
let carNameTwo = 'GMC'; // single quotes
let myCar = ""; //empty string

/* 3. Boolean
*A boolean has two values only. And these values are either true or false.
*For example:
*/
let a = 1;
let b = 1;
let c = 2;

a === b; // true
b === c; // false


/* 4. Array
*An array is a container that holds values and is written with square brackets
*and have an index that starts at 0. 
*For example: 
*/
let lunchBox = ["subway", "coke", "cupcake"];
//In this array, "subway" has the index of 0, "coke" index is 1, and "cupcake" index is 2.

/* 5. Object
*An object is a containcer that holds values and is written with curly brackets
that can hold multiple values at a time. 
*For example: */
    var favSong = {
    title: "Man in the Mirror",
    artist: "Michael Jackson", 
    year : 1988
};

/* 6. Function
* A function is a block of code inside curly brackets {}
*that performs a certain set of instructions.
/* An example of a function:*/
 function addNum (a,b){
    return a + b; 
}
addNum(5,2); //--> adds 5 + 2 which equals 7 

/* 7. undefined
* Undefined is when a variable has not been assigned a value.
*For example: */
let dog;
console.log(dog); // prints undefined to the console log

/* 8. null
* Null represents the intentional absence of any object value.
* For example:
*/

let carName = { company: "GMC", type: "SUV", color: "Idridum Metallic"};
carName = "null"; // value is null but it is still an object

/* 9. NaN
*NaN means Not-a-Number. When a value is just that, not a number
*For Example:
*/
isNaN("Hello"); // true

isNaN(4,5,6); // false

/* 10. Infinity and -Infinity 
* Infinity is a  number property that has a positive infinity value.
* Infinity is displayed when a number exceeds the upper limit of the floating 
* point numbers, which is 1.797693134862315E+308.
*/

/* -Infinity is a number property that has a negative infinity value.
* -Infinity is displayed when a number exceeds the lower limit of the floating
* point numbers, which is -1.797693134862316E+308.
*/

/* 11. What is the difference between primitive/simple and complex data types?
*Primitive data is data that can't be altered and is not an object. This data
* consist of a single value. Variables in JavaScript are not directly associated
 with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
*Complex data data that would be considered an object. They are a 
collection of values.
*/


/* 12. Primitive values are passed to a function BY COPY/VALUE, complex values are 
*BY REFERENCE. What does that mean, and how are they different?
*With Primitive values, when you assign a value to a variable, 
*and then reassign that value to another variable, the value from the first
*variable is copied and reassigned to the following said variable.
*For example:
* var a = 1;
*var b = a; the value 1 variable a has been copied from variable a and 
*reassigned to the variable b. Primitive values have no properties, they are just values.
*Since primitive data isn't an object, if we need to get the length of a string; we need to 
* use the length property of the string; sting.length.
*With Complex values, values are assigned to variables in that
*serves as reference for retreival.
*For example, if declare a variable called
*var myArray = [];
*myArray can be retrieved for future usage/reference rather than
typing out the entire array.
*/
