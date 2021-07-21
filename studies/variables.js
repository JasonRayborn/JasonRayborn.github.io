/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


/*Using let*/
/* let is now preferred for a variable declaration. It also solves
the problem with var.
let is blocked scoped
A block is a chuck of code bounded by {}. Anything within curly braces is a block.
*/
/*Example*/
let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   //console.log(hello) // hello is not defined
   
   
   /*Using const*/
   /*Variables declared with the const maintain constant values. 
   const declarations share some similarities with let declarations.
   const is also blocked scoped.
   const cannot be updated or re-declared. This means the value of a variable
   declared with const remains the same within the scope.
   */
   /*Example*/
       //const greeting = "say Hi";
    greeting = "say Hello instead";// error: Assignment to constant variable