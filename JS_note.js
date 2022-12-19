Comments:
//
/*...*/

literal: data value which belongs to a particular data type.

Identifier:

Rules:
JavaScript identifier must begin either with a letter, underscore ‘_ ‘ or a dollar sign ‘ $ ‘
The first character must not be a number or digit
The subsequent character after the first one can be letters, digits,underscore or dollar sign, and anycombination of those.

Reserved Keywords cannot be identifiers.

JavaScript types can belong in two categories:
Primitive types
Object types

JavaScript primitive types can be:
Strings
Numbers
Boolean values (Booleans for true
or false values)
Bigint
Undefined and null are regarded as
special values
Symbol

Primitive values are immutable, and nonprimitive values are mutable after creation.

The primitive types are stored by value, and the non-primitive (objects) are stored by reference.

Variable names that are a composition of two words, we can use a convention called camel case.

In most programming languages, the data type is strongly fixed and cannot be changed after its declaration, but in JavaScript, this is not the
case; we can set the variable to any type we want.

In ES2015 or ES6, we have two new ways to create variables, and those are by using the “let” and “const” keywords.
Before var was used.

When we have a variable declared outside the function body, that variable belongs to a global scope. The global scope variables are
part of the global object, and we can access that object using the globalThis keyword.

The variables declared using the var keyword cannot be deleted by the delete operator.

Const should be declared and initialized. ( If not intialized, syntax error;)

Another important point to understand is that you can declare the same variable multiple times using var, so redeclaring
and re-initializing is not a problemwith var, but this will be a problem if we use “let” and “const.”

Var Hoisting the declarations are processed before execution of rest of the code.

Difference between and Var and let
The block scope is ignored with the var keyword, and changing the value will affect the other variables under the same
name. With the let keyword, the variable created inside the block is treated as a different variable with a new value.

Since ES6, we can delimit strings with a backtick.

The variable's value is undefined by default.The second value that indicates an absence of variable value is null. The null keyword
indicates that there is “no value” for strings,numbers, and objects. Please note that undefined is not a reserved keyword, but null is.
Both null and undefined are converted as false.

Object:

In the object above, we have name:value properties.
let user = {
userName: 'Rick',
age: 33
};

Adding new properties.
user.occupation = 'Developer';

Removing a property
delete user.occupation;

*can access objects using . and ['']

Craeting objects using new keyword
empty object:
let studentObj = {};

object prototype:
Every object we create inherits features from the parent object known as prototype.
The Array.prototype belongs and inherits from the parent that we already mentioned, Object.prototype, and
therefore we have created the famous prototype chain.

const a= new object();
const rick = Object.create(person);
//empty objects using object literals
const obj3 = {};
//empty object using Object.create, its same as the one above
const ob4 = Object.create(Object.prototype);

Arrays
it is dynamic in js

Spread Operator [...]:
to craetea new array or copy the array elements

Accessing the array elements: using index

Multidimensional array

Conditional statemets

if Syntax:
if (expression)
statement

if else syntax:
if (condition)
{
statement block 1
}
else
{
statement block 2
}

elseif syntax:

if (condition)
{
statement block 1
}
elseif
{
statement block 2
}
else{
statement block 3
}

ternary(conditional) operator
condition ? expressionIfTrue : expressionIfFalse

Switch Syntax
Switch(expression)
{
case: statement; break;
default:
}

To convert a string to number :
Number
parseFloat
parseInt

To convert a Number  to string :
.toString()

while syntax:
while(condition)
{
code block to be executed
}

do/while Syntax
do{//statement
//code
}while(condition)


for loop syntax:
For (statement 1; statement 2; statement 3) {
// code block to be executed
}

while (true) {
//your code
}

for ( ; ; ) {}

The for/of loop is different than the for loop because it loops over the elements of an iterable object.
Maps
Strings
Sets
Arrays
 
for/of in array
let numbersArray = [1,2,3,4,5,6,7,8,9,10];
let total = 0;
for(let element of numbersArray ) {
total += element;
}

for/of in objects:
object.entries();
object.keys();

object.keys():

let propertyNames = "";
for(let names of Object.keys(testObject)) {
propertyNames += names;
}
console.log(propertyNames);


object.entries():

let testObject1 = {
a: 1,
b: 2,
c: 3,
d: 4,
}
for(let [k,v] of Object.entries(testObject1)) {
console.log('Key: '+k);
console.log('Value: '+v);
}



The for/in statement loops through the properties of an object.

Syntax:
for (variable in object) {
statement
}


One important point is that this loop will not go over through all of the properties we have in the object. For example, it will not
enumerate the property names that are symbols.\

FUNCTIONS:
Functions are subprograms that are written once, and they may be invoked or executed many times.

DECLARING A FUNCTION:
function name (parameter1,…parameter2)
{
//function body
}
example:

function total (x, y) {
return (x + y);
}

Invoking Functions:

let storeResult = total(4,9);

Function expression:

Syntax for function expression (anonymous):

let variableName = function (x, y) {
statements... return (x+y) 
};

Invoking function expression:

JavaScript functions can be invoked in different ways:
1) Invoking a function as a method
2) Invoking a function as a function –(we have already tried this above)
3) Invoking a function as a constructors
4) Invoking a function using the call () and apply ()

Call() and apply()
assemble.call(computerParts,'Motherboard', 'CPU',
'RAM','Storage','Power Supply PSU', 'System
Cooling','Operating system (OS)','Gaming Peripherals','PC
Case');
assemble.apply(mobilePhone, ['Display', 'Battery', 'SoC',
'Memory/Storage','Microphone','Speaker','Opeartion
System','Cameras']);


ARROW FUNCTIONS:

arrow operator ‘=>’.
// Arrow Function
let addFun = a => a + 100;

One important thing here is that we need to use the ‘=>’ operator in the same line as the parameters. Otherwise, it will throw you an
error

Passing Arguments to functions

Default function parameters:

This is the syntax:
function fnName(param1 = defaultValue1, ..., paramN = defaultValueN) { ... }

Closures:
function outerFun() {
let x = 10;
function innerFun() {
let y= 20;
console.log(x+y);
}
return innerFun;
}

CLOSURES
The closures preserve the scope chain during the outer function execution.
If we want to see the Closure element in our console window, then instead of console log the result, we can use another method called
console.dir();

the inner function has access to three scope chains:
Access to the variables declared in its own scope
Access to the outer function variables because of the closures
Access to any variables that are declared in the global scope. This means if we have variables declared outside of the two
functions, the inner function would still use them.

EXCEPTIONS
To catch an exception, we are using try/catch/finally statement.

Exception syntax using try/catch:
try {
// Block of code to try
} catch (e){
// Block of code to handle errors
}
finally {
//Block of code to be executed regardless of the try/catch result
}

Since ES10 or ES2019, we can omit the catch clause parentheses and the identifier, and we can now use the bare catch keyword.
try {
// Block of code to try
} catch {
// Block of code to handle errors
}

THROWING EXCEPTIONS

We can use a throw statement to throw an exception when the function cannot produce a valid result

Syntax:
throw expression;

list of error names

SyntaxError – Thrown when a
syntax error occurs while parsing
JavaScript code.

TypeError - Raised when the type of
a variable is not as expected.

RangeError -Thrown when a
numeric variable exceeds its
allowed range

ReferenceError - Thrown when an
invalid reference is used.

URIError - Thrown when the
encodeURI() or decodeURI()
functions are used in an incorrect
manner

InternalError - indicates an error that
occurred internally in the JavaScript
engine.

DOM:DOCUMENT OBJECT MODEL

DOM is an interface between documents and JavaScript.
DOM is not a programming language, but it is a Web API used to build websites.
There are three distinctive node types in the DOM:

Element – element nodes are also known as objects of the DOM. These nodes can contain text and attribute data. Example: p, h1 are
element nodes.

Attribute – attribute nodes are located inside the element node and add extra information. Example: inside the p element, we can have a
class <p class =’bigText’>

Text – text nodes are the content inside the element node

<p id="todayDate"> Keep Learning! </p>

JavaScript programs need DOM to perform
some or all of these actions:
Add new nodes in the DOM
Add new element in the DOM
Add or modify style (CSS)
Add new attributes or remove and
modify older attributes of the DOM
elements
Create and add events to the DOM
element
Delete elements from the DOM tree

Methods of document object

Some of the most important methods of document object are:
1. document.write()
2. getElementById()
3. getElementsByName() - deprecated : returns nodelist
The HTMLCollection object represents a collection of nodes, and we can access those nodes individually if we use index numbers.
we first need to use the Array.from() method to convert the collection to a regular array.
we can chain the Array.from with the forEach() method. we already know so we iterate over the elements of an array and we can display them correctly
4. getElementsByTagName()
5. getElementsByClassName()

BOM: BROWSER OBJECT MODEL

The Browser Object Model or BOM refers to the window and all of the objects exposedby the web browser.

All of the global JavaScript objects, methods/functions, and variables are automatically members of the window object.

Even the HTML DOM is a property of the window object.

There are a few window methods like:
window.open() – this will open a new window
window.close() – this will close the current window
window.moveTo() – this will move the current window
window.resizeTo() – this will resize the current window

JAVASCRIPT EVENTS

some of the events triggered for the window object, and they also apply to the <body> tag as well:

onafterprint
onbeforeprint
onload
onmessage
onresize
onunload
onerror

HTML FORM EVENTS

onblur
onchange
oncontextmenu
onfocus
onsubmit
onreset 

KEYBOARD EVENTS

onkeydown
onkeypress
onkeyup

MOUSE EVENTS

onclick
ondblclick
onmouseover
onmousedown
onmousemove
onmouseout
onmouseup
onwheel

JAVASCRIPT EVENT LISTENERS

document.getElementById("clickBtn").addEventListener('click', ()=>{
document.getElementById("output").innerHTML = "New Text!!!";
});

The first argument for addEventListener is where we specify the name of the event we are listening for.
The second argument of the addEventListener is the arrow function.

OOP: OBJECT ORIENTED PROGRAMMING

object has these 3 characteristics:
1) Identity : different and unique
2) State : state of the object is defined in its properties
3) Behaviour : can express an object’s behaviour if we use methods.

bonuses:function(extraBonuses){ can also be written as bonuses(extraBonuses){//this is called syntactic sugar.
cannot use this keyword with arrow function.

We can access object properties if we use the dot notation or square brackets
console.log(domainExtension['commercial']); // Output.com
console.log(domainExtension.commercial); // Output: .com

Using Constructor:

var domainExtension = new Object();

Object () is a special function that is called constructor. Every time we use the new keyword, a function is
called that will create the new object.

constructor functions:

function Person(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
}

constructor names start with a capital letter(not mandatory).

CLASSES

JavaScript classes are nothing but syntactic sugar for a constructor function and a prototype object
The JavaScript classes are nothing more than a bundle of constructor functions and prototype methods. A class in
JavaScript is a set of objects that inherit the properties from the prototype object.

//Classes in JavaScript
class Person {
constructor(firstName, lastName, age, position, country){
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
this.position = position;
this.country = country;
}
printDetails() {
console.log(`Hi! My details are:
Name: ${this.firstName},
Name: ${this.lastName},
Name: ${this.age},
Name: ${this.position},
Name: ${this.country}
`);
}
}

INHERITANCE

The children(sub) class of parent(super) class to get all of the functionality and properties that the parent class has to offer, but what is
more important is that the children of that class can add its own new functionalities and properties.

syntax:
class Child extends Parent

SETTER AND GETTER

getter methods will always return us something. The getters methods do not take parameters, and they are declared with the keyword ‘get’.

the setters are used to set or assign a value to a property. We also need to provide that new value of the property as a parameter.

getters/setters exist to define accessor properties as methods instead of simple data properties.

const testObj = {
name: 'Andy',
get userName() {
return this.name;
},
set userName(newValue) {
this.name = newValue;
}
};
console.log(testObj.userName);
testObj.userName = 'Rick';
console.log(testObj.userName);


STATIC PROPERTIES AND METHODS

assign a method to the class function, not to its prototype. These methods are called static methods.

The static methods are used to implement functions that belong to the class but not to the object(ES6)

static staticMethod(){
//STATEMENTS
}

//call a static method using the class name
classname.staticMethod();

static properties: static staticPropery = 'Some Info'; can be called using classname.


PUBLIC, PRIVATE FIELDS:

The class instance fields are public by default

The prefix # before the filed name will mean only one thing: this is a private field declaration and that this field can be accessed inside the class
and its methods/constructor.


OVERRIDING METHODS

if we add another method in the sub class with the same name as it in the parent class, the process is called method overriding

super (…), we can use it to call the parent constructor (we need to use this keyword inside the child constructor)

super.method (…), we can use this to call the method declared in the parent.


OVERRIDING CONSTRUCTOR:

always use the parent constructor before this keyword in child class.


OVERRIDING CLASS FILEDS

let animal = new Animal('Animal');
let dog = new Dog("Dog","Labrador");
console.log(animal.name);//Animal
console.log(dog.name);//Dog

THIS REFERENCE:

if you call a constructor function without the new keyword, then the ‘this’ keyword will be set to undefined

The ‘this’ keyword can be used in two different contexts: the global and function.

const incrementObj = {
counter: 0,
increment: function () {
return ++this.counter;
}
};

//call the increment fn
incrementObj.increment(); //1

‘This’ keyword – Global context:

In the global context, ‘this’ references the global object, the ‘window’ object on the web browser
//window object
console.log(this === window); // true


STRICT MODE:

introduced in ECMAScript 5.

we can’tuse undeclared variables under this mode.

to enable this mode in JavaScript use the below line at the top of the file.

'use strict';

(Node.js environment (node --use-strict))

Benefits of using Strict mode:

1) Strict mode will ensure we are writing ‘secure’ bug-free code
2) Strict mode will resolve the errors by throwing new errors
3) Strict mode can be executed faster than non-strict code
4) Strict mode will prevent errors
5) Strict mode disables unusual JavaScript features



‘This’ keyword–function context

When we use strict mode, then this keyword is set to undefined.


‘This’ keyword – method invocation

//bind method where we pass the animal object
let animalType = animal.getType.bind(animal);
console.log(animalType()); // Mammals


DESTRUCTURING ASSIGNMENTS FOR ARRAYS(ES6):

This syntax is JavaScript expression gives us the option to use the values stored in arrays or objects and unpack those values into variables

//Destructuring Assignment
let [valueA, valueB] = [10, 20];
console.log(valueA); //Output: 10
console.log(valueB); //Output: 20

let [valueC, valueD, ...restValues] = [10, 20, 30, 40,50,60,70];
console.log(restValues); //Output: Array [30,40,50,60,70]


When we have a destructuring assignment, the values on the right are fetched/destructed and stored into the variables on the left


DESTRUCTURING ASSIGNMENT FOR OBJECTS:

let personObj = {
firstName: 'Shia',
lastName: 'labeouf',
age: 38
};
let {firstName, lastName, age} = personObj;
console.log(firstName);
console.log(lastName);
console.log(age);

Nested object Destructuring

const user = {
studentId: 12234772346,
education: {
degree: 'Masters of Information Technology'
}
};
const {studentId,education: {degree}} = user;
console.log(degree); //prints: Masters


JSON(JavaScript Object Notation):

//JSON Object declaration
studentJSON = '{"firstName":"Danial", "lastName":"Craig", "age":50, "jamesBond":false}';


JSON data can have the following list of values:

A number
A string in double quotes
Null
Boolean; true or false
Floating-point numbers
Object literals
An Array literals

countriesJSON = '["Australia", "USA", "Macedonia"]';

the arrays in JSON format must be from these following types:
String
Number
Object
Array
Boolean
Null


JavaScript supports JSON serialization and deserialization using these two functions:

JSON.parse() : will take the JSON string and transform it into a JavaScript object

JSON.stringify():will transform the JavaScript object back to a JSON string


TYPE CONVERSIONS:

can do an explicit conversion as well, and this is done with the help of these three functions:

Boolean ()
Number ()
String ()

Truthy, Falsy & Type Coercion

== (loose or abstract equality).

=== (strict equality).

thefollowing values are always treated as falsy values:
false
0 (zero)
-0 (minus zero)
‘’, “”, `` (empty string)
null
undefined
NaN
On (BigInt zero)

Everything else is considered as truthy:

‘0’ (string that contains a single
zero)
‘false’ (a string that contains text
‘false’)
[] (an empty array)
{} (an empty object)
function (){} (an empty function)

can use the Boolean constructor to convert any value to a real Boolean value, or we can use the double-negative !! operator

// instead of
if (a === x)
// use
if (Boolean(a) === Boolean(x))
// or
if (!!a === !!x)


ADVANCED ARRAYS:

Finding array elements with includes ()

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbersArray.includes(6)); // output: true

The syntax for the includes () method is the following
includes(element)
includes(element, fromIndex) : The ‘fromIndex’ represents the position in the array where the search we want to begin.

indexOf and lastIndexOf METHODS

Syntax for indexOf () method:
array.indexOf(item, start)

array.lastIndexOf(item, start)


find and findIndex METHODS

findIndex() method will return the index of the array element that passes a certain test

Syntax:
array.findIndex(function(currentValue, index, arr),thisValue);


find () method will return the arrayelement's value that passes the test we are defining in the function

array.find(function(currentValue, index, arr),thisValue);


LOOPING THROUGH AN ARRAY:

MAP METHOD: The map method creates a new array because it calls a function for every element of the given array.

Most importantly, the map function will not be called for an empty array element and does not change the original array either

is included in the property Array.prototype.map():

Syntax:
array.map(callback function(currentValue, index, array), thisValue);

The first argument is the value of the current element and is required as well. The rest of the arguments are optional
index stands for the index of the current element (‘arrays are always zero based’), 
and the last argument, the array argument, is the array object the current element belongs to.

map(callbackFn)
map(callbackFn, thisArg)

// Arrow function
map((element) => { ... })
map((element, index) => { ... })
map((element, index, array) => { ... })


ARRAY REDUCE METHODS IN JAVASCRIPT:

Array object’s reduce is an iteration method.

reduce has two very powerful features:

It will always return a single value.
You can choose the data type to be returned.

syntax:
Array.reduce(reducer function(accumulator, currentValue, index, array), initialValue);

The reduce method is comprised of two parts:
1)reducer function – it can take up to four arguments and the first two we must include, and the last two are optional
2)an initial value


SPARSE ARRAY:


A sparse array is an array where one or more elements are missing or an array in which the elements are not sequential, meaning they don't always start from position zero (0).

const yearlySales = [ , 5, , 12];

forEach and map will skip the holes.

sparse array into a normal dense array without any holes using the filter method.

const array2 = [ 1, , 2 ];
const array2Map = array1.filter(item => item);
console.log(array2Map) // Output: (2) [1, 2]

The filter, flat and flatMap methods skip the missing elements and return an array that is not sparse.

FLAT AND FLATMAP :

//nested array sorted with flat method
const users = [['Andy', 0],['Tom', 1],['Carol',2],['Jason',3]];
const flattenUsers = users.flat();
console.log(flattenUsers);//Expected output: (8) ['Andy', 0, 'Tom', 1, 'Carol', 2, 'Jason', 3]

flatMap method will only flatten the array 1-level deep. If we need to flat the array on more than one level, we
can pass in the parameter in the flat methodto specify the depth.
flat(n)


reduceRight METHOD:

reduceRight works in the opposite direction of reduce, meaning it starts from the last element in the array and travels towards the first element.


MAPS AND SETS:

Map allows the keys to be from any data type.
advantage that Map has is that they do not have a prototype chain like the Objects do.

new Map() 
map.set (key, value) 
map.get (key)
map.has (key) 
map.delete(key) 
map.clear() 
map.size 

//looping through map with for/of
for(const [key,value] of newMap){
console.log(`The key is: ${key}, and the value is:
${value}`);
}

//iterate through map with forEach
newMap.forEach((key,value)=>{
console.log(`The key is: ${key}, and the value is:
${value}.`);
})

More advanced Map iteration:

1.map.keys() – returns the keys,
2.map.values() – returns the values,
3.map.entries() – returns both entries [key, value]

SETS:

A set is a special data structure ‘set of values’where each value is unique, meaning therewill be no duplicates.

let set = new Set();

The API for sets:

new Set(iterable)
set.add(value) 
set.delete(value) 
set.has(value) 
set.clear() 
set.size











