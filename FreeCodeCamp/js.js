// Use Bracket Notation to Find the Nth-to-Last Character in a String
// You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

// For example, you can get the value of the third-to-last letter of the const firstName = "Augusta" string by using firstName[firstName.length - 3]

// Example:

// const firstName = "Augusta";
// const thirdToLastLetter = firstName[firstName.length - 3];
// thirdToLastLetter would have a value of the string s.

// Use bracket notation to find the second-to-last character in the lastName string.

// Hint: Try looking at the example above if you get stuck.
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line


// Word Blanks
// We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks". You will create an (optionally humorous) "Fill in the Blanks" style sentence.

// In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

// Consider this sentence - It was really ____, and we ____ ourselves ____. This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows:

// const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
// In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.

// You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables.

// You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.



const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb; // Change this line
// Only change code above this line

// Store Multiple Values in one Variable using JavaScript Arrays
// With JavaScript array variables, we can store several pieces of data in one place.

// You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

// const sandwich = ["peanut butter", "jelly", "bread"];
// Modify the new array myArray so that it contains both a string and a number (in that order).

// Only change code below this line
const myArray = ["string", 4];



// Nest one Array within Another Array
// You can also nest arrays within other arrays, like below:

// const teams = [["Bulls", 23], ["White Sox", 45]];
// This is also called a multi-dimensional array.

// Create a nested array called myArray.
// Only change code below this line
const myArray = [
    [],
    []
];

// Access Array Data with Indexes
// We can access the data inside arrays using indexes.

// Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.


// Example

// const array = [50, 60, 70];
// console.log(array[0]);
// const data = array[1];
// The console.log(array[0]) prints 50, and data has the value 60.

// Create a variable called myData and set it to equal the first value of myArray using bracket notation.

const myArray = [50, 60, 70];

const myData = myArray[0];


// Modify Array Data With Indexes
// Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.

// Example

// const ourArray = [50, 40, 30];
// ourArray[0] = 15;
// ourArray now has the value [15, 40, 30].

// Note: There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

// Modify the data stored at index 0 of myArray to a value of 45.

// Setup
const myArray = [18, 64, 99];
myArray[0] = 45;
// Only change code below this line

// Access Multi-Dimensional Arrays With Indexes
// One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

// Example

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14]
// ];

// arr[3];
// arr[3][0];
// arr[3][0][1];
// arr[3] is [[10, 11, 12], 13, 14], arr[3][0] is [10, 11, 12], and arr[3][0][1] is 11.

// Note: There shouldn't be any spaces between the array name and the square brackets, like array [0][0] and even this array [0] [0] is not allowed. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

// Using bracket notation select an element from myArray such that myData is equal to 8.

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12], 13, 14
    ],
];

const myData = myArray[2][1];

//   Manipulate Arrays With push()
// An easy way to append data to the end of an array is via the push() function.

// .push() takes one or more parameters and "pushes" them onto the end of the array.

// Examples:

// const arr1 = [1, 2, 3];
// arr1.push(4);

// const arr2 = ["Stimpson", "J", "cat"];
// arr2.push(["happy", "joy"]);
// arr1 now has the value [1, 2, 3, 4] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].

// Push ["dog", 3] onto the end of the myArray variable.

// Setup
const myArray = [
    ["John", 23],
    ["cat", 2]
];
myArray.push(["dog", 3]);

// Manipulate Arrays With pop()
// Another way to change the data in an array is with the .pop() function.

// .pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

// Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

// const threeArr = [1, 4, 6];
// const oneDown = threeArr.pop();
// console.log(oneDown);
// console.log(threeArr);
// The first console.log will display the value 6, and the second will display the value [1, 4].

// Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.

// Setup
const myArray = [
    ["John", 23],
    ["cat", 2]
];
const removedFromMyArray = myArray.pop(["cat", 2]);

// Manipulate Arrays With shift()
// pop() always removes the last element of an array. What if you want to remove the first?

// That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

// Example:

// const ourArray = ["Stimpson", "J", ["cat"]];
// const removedFromOurArray = ourArray.shift();
// removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].

// Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.

// Setup
const myArray = [
    ["John", 23],
    ["dog", 3]
];
const removedFromMyArray = myArray.shift();
// Only change code below this line

// Manipulate Arrays With unshift()
// Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

// Example:

// const ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift();
// ourArray.unshift("Happy");
// After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Happy", "J", "cat"].

// Add ["Paul", 35] to the beginning of the myArray variable using unshift().

// Setup
const myArray = [
    ["John", 23],
    ["dog", 3]
];
myArray.shift();
myArray.unshift(["Paul", 35]);

// Only change code below this line


// Shopping List
// Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

// The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

// ["Chocolate Bar", 15]
// There should be at least 5 sub-arrays in the list.

const myList = [
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15]
];

Write Reusable JavaScript with Functions
In JavaScript, we can divide up our code into reusable parts called functions.

// Here's an example of a function:

// function functionName() {
//   console.log("Hello World");
// }
// You can call or invoke this function by using its name followed by parentheses, like this: functionName(); Each time the function is called it will print out the message Hello World on the dev console. All of the code between the curly braces will be executed every time the function is called.

// Create a function called reusableFunction which prints the string Hi World to the dev console.
// Call the function.

let reusableFunction = () => {
    console.log("Hi World");
}
reusableFunction();

//   Passing Values to Functions with Arguments
// Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

// Here is a function with two parameters, param1 and param2:

// function testFun(param1, param2) {
//   console.log(param1, param2);
// }
// Then we can call testFun like this: testFun("Hello", "World");. We have passed two string arguments, Hello and World. Inside the function, param1 will equal the string Hello and param2 will equal the string World. Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.

// Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
// Call the function with two numbers as arguments.

let functionWithArgs = (arg1, arg2) => {
    console.log(arg1 + arg2);
}

functionWithArgs(1, 2);

//   Return a Value from a Function with Return
// We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

// Example

// function plusThree(num) {
//   return num + 3;
// }

// const answer = plusThree(5);
// answer has the value 8.

// plusThree takes an argument for num and returns a value equal to num + 3.

// Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
let timesFive = (n) => {
    return n * 5;
}
timesFive(1);

//   Global Scope and Functions
// In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

// Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.

// Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

// Inside function fun1, assign 5 to oopsGlobal without using the let or const keywords.

// Declare the myGlobal variable below this line
let myGlobal = 10;
var oopsGlobal;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

// Local Scope and Functions
// Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

// Here is a function myTest with a local variable called loc.

// function myTest() {
//   const loc = "foo";
//   console.log(loc);
// }

// myTest();
// console.log(loc);
// The myTest() function call will display the string foo in the console. The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function.

// The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

// Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.
function myLocalScope() {
    // Only change code below this line
    let myVar = 4;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

//   Global vs. Local Scope in Functions
// It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

// In this example:

// const someVar = "Hat";

// function myFun() {
//   const someVar = "Head";
//   return someVar;
// }
// The function myFun will return the string Head because the local version of the variable is present.

// Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    const outerWear = "sweater";
    // Only change code above this line
    return outerWear;
}

myOutfit();

// Understanding Undefined Value returned from a Function
// A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

// Example

// let sum = 0;

// function addSum(num) {
//   sum = sum + num;
// }

// addSum(3);
// addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

// Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

// Setup
let sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line
let addFive = () => {
    sum += 5;

}

// Only change code above this line

addThree();
addFive();


// Assignment with a Returned Value
// If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

// Assume we have pre-defined a function sum which adds two numbers together, then:

// ourSum = sum(5, 12);
// will call the sum function, which returns a value of 17 and assigns it to the ourSum variable.

// Call the processArg function with an argument of 7 and assign its return value to the variable processed.

// Setup
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

// Stand in Line
// In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

// Add the number to the end of the array, then remove the first element of the array.

// The nextInLine function should then return the element that was removed.


function nextInLine(arr, item) {
    // Only change code below this line
    var queue = arr.push(item);

    var removeItem = arr.shift();

    return removeItem;
    // Only change code above this line
}



// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//   Understanding Boolean Values
// Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is on and false is off. These two states are mutually exclusive.

// Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.

// Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.

function welcomeToBooleans() {
    // Only change code below this line

    return !false; // Change this line

    // Only change code above this line
}

//   Use Conditional Logic with If Statements
// if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

// When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

// Pseudocode

// if (condition is true) {
//   statement is executed
// }
// Example

// function test (myCondition) {
//   if (myCondition) {
//     return "It was true";
//   }
//   return "It was false";
// }

// test(true);
// test(false);
// test(true) returns the string It was true, and test(false) returns the string It was false.

// When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns It was true. When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns It was false.

// Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue == true) {
        return 'Yes, that was true';
    } else if (wasThatTrue == false) {
        return 'No, that was false';
    }


    // Only change code above this line

}


//   Comparison with the Equality Operator
// There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

// The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

// function equalityTest(myVal) {
//   if (myVal == 10) {
//     return "Equal";
//   }
//   return "Not Equal";
// }
// If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return Equal. Otherwise, the function will return Not Equal. In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:

// 1   ==  1  // true
// 1   ==  2  // false
// 1   == '1' // true
// "3" ==  3  // true
// Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.

// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);

//   Comparison with the Strict Equality Operator
// Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

// If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

// Examples

// 3 ===  3  // true
// 3 === '3' // false
// In the second example, 3 is a Number type and '3' is a String type.

// Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);

//   Practice comparing different values
// In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.

// If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

// Examples

// 3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type conversion is not performed.

// Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

// typeof 3
// typeof '3'
// typeof 3 returns the string number, and typeof '3' returns the string string.

// The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.

// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");

//   Comparison with the Inequality Operator
// The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

// Examples

// 1 !=  2    // true
// 1 != "1"   // false
// 1 != '1'   // false
// 1 != true  // false
// 0 != false // false
// Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

//   Comparison with the Strict Inequality Operator
// The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

// Examples

// 3 !==  3  // false
// 3 !== '3' // true
// 4 !==  3  // true
// Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17

// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);

//   Comparison with the Greater Than Operator
// The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

// Like the equality operator, the greater than operator will convert data types of values while comparing.

// Examples

// 5   >  3  // true
// 7   > '3' // true
// 2   >  3  // false
// '1' >  9  // false
// Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
    if (val > 100) { // Change this line
        return "Over 100";
    }

    if (val > 10) { // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);

//   Comparison with the Greater Than Or Equal To Operator
// The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

// Like the equality operator, the greater than or equal to operator will convert data types while comparing.

// Examples

// 6   >=  6  // true
// 7   >= '3' // true
// 2   >=  3  // false
// '7' >=  9  // false
// Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

function testGreaterOrEqual(val) {
    if (val >= 20) { // Change this line
        return "20 or Over";
    }

    if (val >= 10) { // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);

//   Comparison with the Less Than Operator
// The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.

// Examples

// 2   < 5 // true
// '3' < 7 // true
// 5   < 5 // false
// 3   < 2 // false
// '8' < 4 // false
// Add the less than operator to the indicated lines so that the return statements make sense.

function testLessThan(val) {
    if (val < 25) { // Change this line
        return "Under 25";
    }

    if (val < 55) { // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);
//   Comparison with the Less Than Or Equal To Operator
// The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types.

// Examples

// 4   <= 5 // true
// '7' <= 7 // true
// 5   <= 5 // true
// 3   <= 2 // false
// '8' <= 4 // false
// Add the less than or equal to operator to the indicated lines so that the return statements make sense.
function testLessOrEqual(val) {
    if (val <= 12) { // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) { // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);

//   Comparisons with the Logical And Operator
// Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

// The same effect could be achieved by nesting an if statement inside another if:

// if (num > 5) {
//   if (num < 10) {
//     return "Yes";
//   }
// }
// return "No";
// will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:

// if (num > 5 && num < 10) {
//   return "Yes";
// }
// return "No";
// Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.
function testLogicalAnd(val) {
    // Only change code below this line


    if (val <= 50 && val >= 25) {
        return "Yes";
    }


    // Only change code above this line
    return "No";
}

testLogicalAnd(10);


//   Comparisons with the Logical Or Operator
// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

// The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

// The pattern below should look familiar from prior waypoints:

// if (num > 10) {
//   return "No";
// }
// if (num < 5) {
//   return "No";
// }
// return "Yes";
// will return Yes only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

// if (num > 10 || num < 5) {
//   return "No";
// }
// return "Yes";
// Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside";
    }



    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);
//   Introducing Else Statements
//   When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

//   if (num > 10) {
//     return "Bigger than 10";
//   } else {
//     return "10 or Less";
//   }
//   Combine the if statements into a single if/else statement.

function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

testElse(4);

//   Introducing Else If Statements
// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

// if (num > 15) {
//   return "Bigger than 15";
// } else if (num < 5) {
//   return "Smaller than 5";
// } else {
//   return "Between 5 and 15";
// }
// Convert the logic to use else if statements.

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {

        return "Between 5 and 10";
    }


}

testElseIf(7);

//   Logical Order in If Else Statements
//   Order is important in if, else if statements.

//   The function is executed from top to bottom so you will want to be careful of what statement comes first.

//   Take these two functions as an example.

//   Here's the first:

//   function foo(x) {
//     if (x < 1) {
//       return "Less than one";
//     } else if (x < 2) {
//       return "Less than two";
//     } else {
//       return "Greater than or equal to two";
//     }
//   }
//   And the second just switches the order of the statements:

//   function bar(x) {
//     if (x < 2) {
//       return "Less than two";
//     } else if (x < 1) {
//       return "Less than one";
//     } else {
//       return "Greater than or equal to two";
//     }
//   }
//   While these two functions look nearly identical if we pass a number to both we get different outputs.

//   foo(0)
//   bar(0)
//   foo(0) will return the string Less than one, and bar(0) will return the string Less than two.

//   Change the order of logic in the function so that it will return the correct statements in all cases.
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else if (val >= 10) {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

//   Chaining If Else Statements
// if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

// if (condition1) {
//   statement1
// } else if (condition2) {
//   statement2
// } else if (condition3) {
//   statement3
// . . .
// } else {
//   statementN
// }
// Write chained if/else if statements to fulfill the following conditions:

// num < 5 - return Tiny
// num < 10 - return Small
// num < 15 - return Medium
// num < 20 - return Large
// num >= 20 - return Huge

function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return 'Tiny';
    } else if (num < 10) {
        return 'Small';
    } else if (num < 15) {
        return 'Medium';
    } else if (num < 20) {
        return 'Large';
    } else if (num >= 20) {
        return 'Huge';
    }

    return "Change Me";
    // Only change code above this line
}

testSize(7);

//   Golf Code
// In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

// Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

// Strokes	Return
// 1	"Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	"Birdie"
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Go Home!"
// par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (par == 4 && strokes == 1) {
        return names[0];
    } else if (par == 4 && strokes == 2) {
        return names[1];
    } else if (par == 5 && strokes == 2) {
        return names[1];
    } else if (par == 4 && strokes == 3) {
        return names[2];
    } else if (par == 4 && strokes == 4) {
        return names[3];
    } else if (par == 1 && strokes == 1) {
        return names[0];
    } else if (par == 5 && strokes == 5) {
        return names[3];
    } else if (par == 4 && strokes == 5) {
        return names[4];
    } else if (par == 4 && strokes == 6) {
        return names[5];
    } else if (par == 4 && strokes == 7) {
        return names[6];
    } else if (par == 5 && strokes == 9) {
        return names[6];
    }

    return "Change Me";
    // Only change code above this line
}

golfScore(5, 4);

// Selecting from Many Options with Switch Statements
// If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.

// Here is an example of a switch statement:

// switch (lowercaseLetter) {
//   case "a":
//     console.log("A");
//     break;
//   case "b":
//     console.log("B");
//     break;
// }
// case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.
// Write a switch statement which tests val and sets answer for the following conditions:
// 1 - alpha
// 2 - beta
// 3 - gamma
// 4 - delta

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;

    }


    // Only change code above this line
    return answer;
}

caseInSwitch(1);

//   Adding a Default Option in Switch Statements
// In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

// A default statement should be the last case.

// switch (num) {
//   case value1:
//     statement1;
//     break;
//   case value2:
//     statement2;
//     break;
// ...
//   default:
//     defaultStatement;
//     break;
// }
// Write a switch statement to set answer for the following conditions:
// a - apple
// b - bird
// c - cat
// default - stuff

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
        case "a":
            return "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        case 4:
            return "stuff";
            break;
        default:
            return "stuff";
            break;
    }

    // Only change code above this line
    return answer;
}

switchOfStuff(1);

// Multiple Identical Options in Switch Statements
// If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:
// let result = "";
// switch (val) {
//   case 1:
//   case 2:
//   case 3:
//     result = "1, 2, or 3";
//     break;
//   case 4:
//     result = "4 alone";
// }
// Cases for 1, 2, and 3 will all produce the same result.

// Write a switch statement to set answer for the following ranges:
// 1-3 - Low
// 4-6 - Mid
// 7-9 - High

// Note: You will need to have a case statement for each number in the range.
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line

    let result = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
    }

    // Only change code above this line
    return answer;
}

sequentialSizes(1);
//   Replacing If Else Chains with Switch
//   If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

//   if (val === 1) {
//     answer = "a";
//   } else if (val === 2) {
//     answer = "b";
//   } else {
//     answer = "c";
//   }
//   can be replaced with:

//   switch (val) {
//     case 1:
//       answer = "a";
//       break;
//     case 2:
//       answer = "b";
//       break;
//     default:
//       answer = "c";
//   }
//   Change the chained if/else if statements into a switch statement.

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line


    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }


    // Only change code above this line
    return answer;
}

chainToSwitch(7);

//   Returning Boolean Values from Functions
// You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

// Sometimes people use an if/else statement to do a comparison, like this:

// function isEqual(a, b) {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

// function isEqual(a, b) {
//   return a === b;
// }
// Fix the function isLess to remove the if/else statements.

function isLess(a, b) {
    // Only change code below this line
    return a < b;

    // Only change code above this line
}

isLess(10, 15);

//   Return Early Pattern for Functions
// When a return statement is reached, the execution of the current function stops and control returns to the calling location.

// Example

// function myFun() {
//   console.log("Hello");
//   return "World";
//   console.log("byebye")
// }
// myFun();
// The above will display the string Hello in the console, and return the string World. The string byebye will never display in the console, because the function exits at the return statement.

// Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

// Hint
// Remember that undefined is a keyword, not a string.

// Setup
function abTest(a, b) {
    // Only change code below this line

    if (a < 0 || b < 0) {
        return undefined;
    }

    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

//   Build JavaScript Objects
// You may have heard the term object before.

// Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

// Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

// Here's a sample cat object:

// const cat = {
//   "name": "Whiskers",
//   "legs": 4,
//   "tails": 1,
//   "enemies": ["Water", "Dogs"]
// };
// In this example, all the properties are stored as strings, such as name, legs, and tails. However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

// const anotherObject = {
//   make: "Ford",
//   5: "five",
//   "model": "focus"
// };
// However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

// Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.

// You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, and friends is an array.
const myDog = {
    // Only change code below this line

    name: "",
    legs: 4,
    tails: 1,
    friends: ["Jesse Pinkman", "Walter White"],
    // Only change code above this line
};

//   Accessing Object Properties with Dot Notation
// There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

// Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

// Here is a sample of using dot notation (.) to read an object's property:

// const myObj = {
//   prop1: "val1",
//   prop2: "val2"
// };

// const prop1val = myObj.prop1;
// const prop2val = myObj.prop2;
// prop1val would have a value of the string val1, and prop2val would have a value of the string val2.

// Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.
// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat; // Change this line
const shirtValue = testObj.shirt; // Change this line

//   Accessing Object Properties with Bracket Notation
// The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

// However, you can still use bracket notation on object properties without spaces.

// Here is a sample of using bracket notation to read an object's property:

// const myObj = {
//   "Space Name": "Kirk",
//   "More Space": "Spock",
//   "NoSpace": "USS Enterprise"
// };

// myObj["Space Name"];
// myObj['More Space'];
// myObj["NoSpace"];
// myObj["Space Name"] would be the string Kirk, myObj['More Space'] would be the string Spock, and myObj["NoSpace"] would be the string USS Enterprise.

// Note that property names with spaces in them must be in quotes (single or double).

// Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.

// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"]; // Change this line
const drinkValue = testObj["the drink"]; // Change this line

//   Accessing Object Properties with Variables
// Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

// Here is an example of using a variable to access a property:

// const dogs = {
//   Fido: "Mutt",
//   Hunter: "Doberman",
//   Snoopie: "Beagle"
// };

// const myDog = "Hunter";
// const myBreed = dogs[myDog];
// console.log(myBreed);
// The string Doberman would be displayed in the console.

// Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

// const someObj = {
//   propName: "John"
// };

// function propPrefix(str) {
//   const s = "prop";
//   return s + str;
// }

// const someProp = propPrefix("Name");
// console.log(someObj[someProp]);
// someProp would have a value of the string propName, and the string John would be displayed in the console.

// Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.

// Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.

// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line
const playerNumber = 16; // Change this line
const player = testObj[playerNumber]; // Change this line

//   Updating Object Properties
// After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.

// For example, let's look at ourDog:

// const ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };
// Since he's a particularly happy dog, let's change his name to the string Happy Camper. Here's how we update his object's name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, instead of getting Camper, we'll get his new name, Happy Camper.

// Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.

// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder;"
// Only change code below this line
//   Add New Properties to a JavaScript Object
// You can add new properties to existing JavaScript objects the same way you would modify them.

// Here's how we would add a bark property to ourDog:

// ourDog.bark = "bow-wow";
// or

// ourDog["bark"] = "bow-wow";
// Now when we evaluate ourDog.bark, we'll get his bark, bow-wow.

// Example:

// const ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };

// ourDog.bark = "bow-wow";
// Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";


//   Delete Properties from a JavaScript Object
// We can also delete properties from objects like this:

// delete ourDog.bark;
// Example:

// const ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"],
//   "bark": "bow-wow"
// };

// delete ourDog.bark;
// After the last line shown above, ourDog looks like:

// {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// }
// Delete the tails property from myDog. You may use either dot or bracket notation.

// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line
delete myDog.tails;
//   Using Objects for Lookups
// Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

// Here is an example of a simple reverse alphabet lookup:

// const alpha = {
//   1:"Z",
//   2:"Y",
//   3:"X",
//   4:"W",
//   ...
//   24:"C",
//   25:"B",
//   26:"A"
// };

// alpha[2];
// alpha[24];

// const value = 2;
// alpha[value];
// alpha[2] is the string Y, alpha[24] is the string C, and alpha[value] is the string Y.

// Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

// Setup
function phoneticLookup(val) {
    let result = "";

    // Only change code below this line
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    }
    result = lookup[val]
    // Only change code above this line
    return result;
}

phoneticLookup("charlie");

//   Testing Objects for Properties
// Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

// Example

// const myObj = {
//   top: "hat",
//   bottom: "pants"
// };

// myObj.hasOwnProperty("top");
// myObj.hasOwnProperty("middle");
// The first hasOwnProperty returns true, while the second returns false.

// Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

function checkObj(obj, checkProp) {
    // Only change code below this line

    if (obj.hasOwnProperty(checkProp) == true) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }



    // Only change code above this line
}


//   Manipulating Complex Objects
// Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
// Here's an example of a complex data structure:

// const ourMusic = [
//   {
//     "artist": "Daft Punk",
//     "title": "Homework",
//     "release_year": 1997,
//     "formats": [ 
//       "CD", 
//       "Cassette", 
//       "LP"
//     ],
//     "gold": true
//   }
// ];
// This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested formats array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of artist and a value of Daft Punk.

// Note: You will need to place a comma after every object in the array, unless it is the last object in the array.
// Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

const myMusic = [{
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true,

    },
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1933,
        "formats": [
            "CD",
            "8T",
            "LP"
        ]
    }
];

// Accessing Nested Objects
// The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

// Here is a nested object:

// const ourStorage = {
//   "desk": {
//     "drawer": "stapler"
//   },
//   "cabinet": {
//     "top drawer": { 
//       "folder1": "a file",
//       "folder2": "secrets"
//     },
//     "bottom drawer": "soda"
//   }
// };

// ourStorage.cabinet["top drawer"].folder2;
// ourStorage.desk.drawer;
// ourStorage.cabinet["top drawer"].folder2 would be the string secrets, and ourStorage.desk.drawer would be the string stapler.

// Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.

const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  
  
  const gloveBoxContents = myStorage.car.inside["glove box"];

//   Accessing Nested Arrays
// As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.
// Here is an example of how to access a nested array:

// const ourPets = [
//   {
//     animalType: "cat",
//     names: [
//       "Meowzer",
//       "Fluffy",
//       "Kit-Cat"
//     ]
//   },
//   {
//     animalType: "dog",
//     names: [
//       "Spot",
//       "Bowser",
//       "Frankie"
//     ]
//   }
// ];

// ourPets[0].names[1];
// ourPets[1].names[0];
// ourPets[0].names[1] would be the string Fluffy, and ourPets[1].names[0] would be the string Spot.

// Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.

const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];
//   Iterate with JavaScript While Loops
// You can run the same code multiple times by using a loop.

// The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.

// const ourArray = [];
// let i = 0;

// while (i < 5) {
//   ourArray.push(i);
//   i++;
// }
// In the code example above, the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.

// Let's try getting a while loop to work by pushing values to an array.

// Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

// Setup


const myArray = [];
let i=5;
while(i>=0){
myArray.push(i);
i--;

}
// Only change code below this line
// Iterate with JavaScript For Loops
// You can run the same code multiple times by using a loop.

// The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.

// For loops are declared with three optional expressions separated by semicolons:

// for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.

// The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

// The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.

// The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

// In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final expression.

// const ourArray = [];

// for (let i = 0; i < 5; i++) {
//   ourArray.push(i);
// }
// ourArray will now have the value [0, 1, 2, 3, 4].

// Use a for loop to push the values 1 through 5 onto myArray.

// Setup
const myArray = [];
for (let i = 1; i<=5;i++){
 myArray.push(i);
 
}

// Only change code below this line
// Iterate Odd Numbers With a For Loop
// For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.

// We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.

// const ourArray = [];

// for (let i = 0; i < 10; i += 2) {
//   ourArray.push(i);
// }
// ourArray will now contain [0, 2, 4, 6, 8]. Let's change our initialization so we can count by odd numbers.

// Push the odd numbers from 1 through 9 to myArray using a for loop.
// Setup
const myArray = [];
for (let i = 1; i < 10; i+=2) {
 
    myArray.push(i);
  
  
}
// Only change code below this line
// Count Backwards With a For Loop
// A for loop can also count backwards, so long as we can define the right conditions.

// In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.

// We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.

// const ourArray = [];

// for (let i = 10; i > 0; i -= 2) {
//   ourArray.push(i);
// }
// ourArray will now contain [10, 8, 6, 4, 2]. Let's change our initialization and final expression so we can count backwards by twos to create an array of descending odd numbers.

// Push the odd numbers from 9 through 1 to myArray using a for loop.
// Setup
const myArray = [];
for(let i =1;i<=9; i+=2){
  myArray.push(i);
}myArray.reverse();
// Only change code below this line

// Iterate Through an Array with a For Loop
// A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:
// const arr = [10, 9, 8, 7, 6];

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }
// Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. In this case the last iteration is i === 4 i.e. when i becomes equal to arr.length - 1 and outputs 6 to the console. Then i increases to 5, and the loop terminates because i < arr.length is false.

// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
// Setup
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for( let i = 0;i<myArr.length;i++){

  total+=myArr[i];

}
// Only change code below this line
// Nesting For Loops
// If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:
// const arr = [
//   [1, 2], [3, 4], [5, 6]
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }
// This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.



// Iterate with JavaScript Do...While Loops
// The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.

// const ourArray = [];
// let i = 0;

// do {
//   ourArray.push(i);
//   i++;
// } while (i < 5);
// The example above behaves similar to other types of loops, and the resulting array will look like [0, 1, 2, 3, 4]. However, what makes the do...while different from other loops is how it behaves when the condition fails on the first check. Let's see this in action: Here is a regular while loop that will run the code in the loop as long as i < 5:

// const ourArray = []; 
// let i = 5;

// while (i < 5) {
//   ourArray.push(i);
//   i++;
// }
// In this example, we initialize the value of ourArray to an empty array and the value of i to 5. When we execute the while loop, the condition evaluates to false because i is not less than 5, so we do not execute the code inside the loop. The result is that ourArray will end up with no values added to it, and it will still look like [] when all of the code in the example above has completed running. Now, take a look at a do...while loop:

// const ourArray = []; 
// let i = 5;

// do {
//   ourArray.push(i);
//   i++;
// } while (i < 5);
// In this case, we initialize the value of i to 5, just like we did with the while loop. When we get to the next line, there is no condition to evaluate, so we go to the code inside the curly braces and execute it. We will add a single element to the array and then increment i before we get to the condition check. When we finally evaluate the condition i < 5 on the last line, we see that i is now 6, which fails the conditional check, so we exit the loop and are done. At the end of the above example, the value of ourArray is [5]. Essentially, a do...while loop ensures that the code inside the loop will run at least once. Let's try getting a do...while loop to work by pushing values to an array.

// Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.
// Setup
const myArray = [];
let i = 10;
do{
  myArray.push(i);
  i++;
}
// Only change code below this line
while (i < 11) ;