/*Control Flow 
*The control flow is the order in which the computer executes statements in a script.
*The control flow is a block of code made up of statements. These statements are 
*called "Condition Statements". Conditional statements are a set of instructions
*that are given and executed if a condition is true.
*/


/*There are two conditional statements:
*1. If ...Else
*2. Switch
*Also, the "else-if" to have multiple conditions tested in a sequence.
*/


/*If statement*/
/* The if statement is used to specify a block of
code to be excuted if a conditon is true*/ 
/* Example of an If Statement*/
function finalBoxScore(score) {
    if (score > 90) {
        return "Winner";
    }
}
finalBoxScore(101); // Returns "Winner"



/*Else-If statement*/
/* The else if statement is used when to implement a new condition
if the first condition is false*/
/*Else-If Example*/
function getTime(time) {
    if (time <= 10) {
        return "Good Morning";
    } else if (time > 10 && time <= 20) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}
getTime(11); // Returns "Good Afternoon"



/*Else Statement*/
/* The else statement is used to specify a block of code to 
be excuted if all other conditions are false*/
/*Example*/
function getWeather(a) {
    if (a < 70) {
        return "It's chilly, bring a jacket";
        
         } else {
             return "The weather is perfect for snowballs";
         }
}
getWeather(83); // Returns "The wather is perfect for snowballs"


/*Else Statement*/
/* The else statement is used to specify a block of code to 
be excuted if all other conditions are false*/
/*Example*/
function getWeather(a) {
    if (a < 70) {
        return "It's chilly, bring a jacket";
        
         } else {
             return "The weather is perfect for snowballs";
         }
}
getWeather(83); // Returns "The wather is perfect for snowballs"


/*Switch statements*/
/*Switch statements are used to excute different actions
based on different conditions*/
/*Switch Example*/
let day = 3;
let dayOfTheWeek;
switch (day) {
    case 1: 
        dayOfTheWeek = "Sunday";
        break;
    case 2: dayOfTheWeek = "Monday";
        break;
    case 3: dayOfTheWeek = "Tuesday";
        break;
    case 4: dayOfTheWeek = "Wednesday";
        break;
    case 5: dayOfTheWeek = "Thursday";
        break; 
    case 6: dayOfTheWeek = "Friday";
        break;
    case 7: dayOfTheWeek = "Saturday";
        break;
    default:
        dayOfTheWeek = "Invalid";

}
console.log(dayOfTheWeek); // Logs "Tuesday to the console"