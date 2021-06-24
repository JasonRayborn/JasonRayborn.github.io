/*STRING MANIPULATION */

/* Manipulating string values is a common developer chore.
* This ranges from extracting portions of a string to determining
if a string contains a specific character.
* The following JavaScript functions provide developers with 
everything they need.
*/


/*Manipulating strings with operators*/

let age = 34;
let myInfo = "My name is Jase. I am " + age + " years old";
console.log(myInfo);

/*Manipulating strings with methods.
* Methods used to manipulate strings:
*/

/*concat()
This method combines two strings together.
Example: 
*/

let greet = "Hello, ";
console.log(greet.concat("Welcome to Goodburger. ", "Home of the Goodburger!"));
// logs to the console, "Hello, Welcome to Goodburger. Home of the Goodburger!"


/*slice()
Extracts a section of a string and returns a new string.
Example:
*/

let str = "Howdy Partner";
console.log(str.slice(0,5));
//logs to the console, "Howdy"


/*split()
Splits a string into an array of strings by separating the string into two substrings.
Example:
*/

let str1 = "Hey dude, where's my car?";
console.log(str1.split(" "));
// logs to the console, ['Hey', 'dude,' "where's", 'my', 'car?']
// splits the strings into an array of individual strings


/*toLowerCase()
Converts the entire string to lower case.
Example:
*/

let message = "I LOVE CODING!";
console.log(message.toLowerCase(" "));
// logs to the console, "i love coding!"


/*toUpperCase()
Converts the entire string to upper case.
Example:
*/

let str3 = "it's time to party!";
console.log(str3.toUpperCase(" "));
// logs to console "IT'S TIME TO PARTY!"


/*string.length()
The length of the string is returned as the count of the number of characters it contains
Example:
*/

let str4 = "Hello World";
console.log(str4.length);
// logs to the console, 12