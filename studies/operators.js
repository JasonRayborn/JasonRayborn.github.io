/*Operators*/


/*Operators are used to perform some operation on a 
single or multiple operands (data value) and produces a result*/

/*Assignment Operator*/
/*An assignment operator assigns a value to its left operand
based on the value of its right operand
=.. Assign value
+=.. Add then assign
-=.. Subtract then assign
*=.. Multiply then assign
/*Example*/
 let x = 1; //assigns the value of 1 to x
 console.log(x); // logs 1 to the console

 
 /*Comparsion Operator*/
 /*A comparison operator compares its operands and returns a logical
 value based on whether the comparison is true*/
 /*Example*/
 let num = 1;
 let num2 = 2;
 num == num2; //"Loose Equal" //Returns true if the operands are equal
 num != num2; //"Loose Not Equal" // Returns true if opreands are not equal
 num === num2; //"Strict Equal" // Returns true if both operands are true and same type
 num !== num2; //"Strict not Equal" Returns true if operands are same type but not equal, or are different types
 num > num2; //"Greater than" Returns true if left operand is greater than right
 num < num2; //"Less than" returns true if left operand is less than right
 num >= num2; //"Greater than or equal" Returns true if left operand is greater or equal to right
 num <= num2; //"Less than or equal" Returns true if left operand is less or equal to right
 
 
 /*Arithmetic operator*/
 /*The arithmetic operator takes numerical values (either literals or variables) 
 as their operands and returns a single numerical value*/
 /*Examples*/
 /* Remainder %: Binary operator that returns the integer remainder from division
 *Increment ++: Unary operator that adds one to its operand.
 *Decrement --: Unary operator that subtracts one from the operand
 *Add +: Adds both operands 
 *Subtract -: Subtract both operands 
 *Multiply *: Multiply both operands together
 *Divide /: Divide both operands
 */
 var additionOutput = 2 + 2; //addition
var subtractionOutput = 2 - 2; //subtraction
var multiplcationOutput = 2 * 2; //multiplcation
var divisionOutput = 2 / 2; //division
var exponentiation = 2**2; // Exponentiation
var modulus = 5 % 2; // Modulus (Remainder)
 
 
 /*Logical Operators*/
 /*Logical operators are typically used with Booleans (logical) values; when they are 
 used, they return a Boolean value*/
 /*Examples*/
 /*&& Operator: sum1 && sum2 / Returns sum1 if it can be converted to false, otherwise 
 returns sum2. If both operands are true, it returns true.
 *OR || Operator: sum1 || sum2 / Returns sum1 if it can be converted to true, otherwise
 it returns sum2. If both are are true, it returns true, otherwise if both are false,
 it returns false.
 *Not ! Operator: !sum1 / Returns false if its single operand that can be converted
 to true, otherwise it returns true.
 */
 let a = 1;
 let b = 4;
 if (a || b) {
	console.log("I will run if either a or b are true");
}

if (a && b) {
	console.log("I will run, if and only if a and b are both true");
}

if (!a) {
	console.log("I will only run if a is false");
}

if (a) {
	console.log("I will only run if a is true");
}
 
 
 /*Conditional (ternary) Operator*/
 /*This conditional operator is the only JS operator that takes three operands.
 The operator can have one or two values based on a condition.
 condition ? value1 : value2 === The syntax
 */
 /*Example*/
 let ofAge = (16 >= 18) ? "adult" : "minor";
 console.log(ofAge); // returns "minor"
 
 
 /*Unary Operator*/
 /*A unary operation is an operation with only one operand. 
 This operand comes either before or after the operator.
 */
 /*Example*/
 /*Operator	Explanation
Unary plus (+)	Tries to convert the operand into a number
Unary negation (-)	Tries to convert the operand into a number and negates after
Increment (++)	Adds one to its operand
Decrement (--)	Decrements by one from its operand
Logical NOT (!)	Converts to boolean value then negates it
*/
var unaryOperator = 1; 
++unaryOperator; // Unary Operator Increment // ++ , --