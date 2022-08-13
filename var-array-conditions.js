// -------------------------------------------------------
// ------------------------variable-----------------------
// -------------------------------------------------------
var price1 = 31;
var price2 = 10;
var totalPrice = price1 + price2;
// console.log(totalPrice)
var firstName = 'Dhaka';
var lastName = 'city';
var fullName = firstName + ' ' + lastName;
// console.log(fullName);


// float, decimal: 3.65,  

//variable naming convention: rules, best practice

// number type variable
var sunglassPrice = 120;

// string type variable
var specialOneName = "dhaka";

// boolean type variable
var isSingle = true;
//  * 1. single word
//  * 2. no gap or speace
//  * 3. no quote
//  * 4. no keyword
//  * 5. can not start with a number
//  * 6. can not contain dash
//  * 7. should use camelCase


// Math Operations: +, -, *, /
// Shorthand: +=, -=, ++, --

// convert: parseInt, parseFloat

// toFixed

// remainder : vagses: %

var gpa = '3.33';
// var gpaNumber = parseFloat(gpa);

var price1 = '31';
var price2 = 10;

price1 = parseInt(price1);
var totalPrice = price1 + price2;
// console.log(totalPrice)

var gpaNumber = 3;
// console.log(typeof gpaNumber);

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
sum = parseFloat(sum);
// console.log(sum)

var num1 = 51;
var num2 = 53;

// console.log(num1 !== num2)

// ---------------------------------------------------------
// ---------------------------array-------------------------
// ---------------------------------------------------------

var friendAge = [11, 15, 17, 19, 21];
var vowel = ['a', 'e', 'i', 'o', 'u'];

// console.log(friendAge.length)
// console.log(vowel.length)

var number = [46, 47, 56, 57, 66, 67];

// 1. get element value by index
var element = number[5];
// console.log(element)

// 2. set element value by index
number[1] = 45;
number[5] = 65;
// console.log(number)

// 3. find index of an element
var position = number.indexOf(57);
// console.log(position)

//use push to add element to an array as the last element array
number.push(73);

// use pop to delet last element
number.pop();

// use pop to delet and get last element
var elements = number.pop();

// console.log(number)
// console.log(elements)

// check array using Array.isArray
// console.log(Array.isArray(arrayName));

//----------------------------------------------------------
//---------------------------objects------------------------
//----------------------------------------------------------

var student = {
    id: 115,
    name: 'Solamin Khan',
    class: 9,
    marks: 98
}

var mobile = {
    brand: 'Samsung',
    price: 19000,
    storage: '64gb',
    camera: '7MP'
}


var myComputer = {
    brand: 'lonovo',
    price: 39000,
    color: 'silver',
    processor: 'i7'
}

// console.log(myComputer.processor);

var properties = Object.keys(myComputer);
var propertyValues = Object.values(myComputer);
// console.log(properties, propertyValues)

//-------set property values-------

myComputer.processor = 'i79';
mobile['price'] = 35000;
// console.log(myComputer.processor, mobile.price)


// --------------------------------------------------------
// ------------------------conditions----------------------
// --------------------------------------------------------


// conditionals
// <, >, ==, !=, <=, >=
// &&, ||


var tk = 50;
var chips = 47;
var cake = 30;
var toast = 20;

if (chips < tk) {
    // console.log('chips kinbo')
}
else if (cake < tk) {
    console.log('cake kinbo')
}

else if (toast < tk) {
    console.log('toast kinbo')
}
else {
    console.log('kichu kinbo na')
}


// --------------------------
// -----multi conditions-----
// --------------------------

var hungry = true;
var tk = 10;
var shop = 0;

if (hungry == true || tk > 900 || shop > 3) {
    // console.log('khabar kinbo')
}
else if (hungry == false && tk > 300 || shop == 1) {
    console.log('try to buy')
}
else if ((hungry == false && tk > 50) || shop == 0) {
    console.log('try to borrow')
}
else {
    console.log('kichu kinbo na')
}

// -----------------------------
// ------nested conditions------
// -----------------------------

var html = true;
var css = true;
var js = true;

if (html == true) {
    if (css == true) {
        if (js == true) {
            // console.log('pro')
        }
        else {
            console.log('js shikte hobe')
        }
    }
    else {
        console.log('css shikte hobe')
    }
}
else {
    // console.log('html shikte hobe')
}

//----------------largest------------------


var num1 = 10;
var num2 = 20;
var num3 = 30;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1);
    }
    else {
        // console.log(num3);
    }
}
else {
    if (num2 > num3) {
        console.log(num2);
    }
    else {
        // console.log(num3)
    }
}

//------------------------------------------------------------
//---------------------------switch---------------------------
//------------------------------------------------------------

//--------------directly switch to right logic----------------

var color = 'white';

switch (color) {
    case 'green':
        console.log('You are a green');
        break;
    case 'blue':
        console.log('You are a BLUE');
        break;
    case 'white':
        // console.log('You are a white');
        break;
    case 'red':
        console.log('You are a red');
        break;
    case 'yellow':
        console.log('You are a yellow');
        break;
    default:
        console.log('You are a nothing');
}

//--------------------------arguments------------------------
//--------------index of the psrameters position-------------

function add(num1, num2) {
    // console.log(num1, num2);
    // console.log(arguments[4]);
}

const arg = add(12, 13, 45, 89, 78);

//-----------------------------------------------------------
//----------------------------math---------------------------
//-----------------------------------------------------------

const numbers = 2.451;
const result1 = Math.round(numbers);
const result2 = Math.ceil(numbers);
const result3 = Math.floor(numbers);

// console.log(result1);
// console.log(result2);
// console.log(result3);

//-----------------------------------------------------------
//-----------------------swap with temp----------------------
//-----------------------------------------------------------

let first = 5;
let second = 7;
// console.log(first, second);

//------approach: 1------
const temp = first;
first = second;
second = temp;

//---approach: 2 Destructuring---
[first, second] = [second, first];

// console.log(first, second);

//-----------------------------------------------------------
//------------------------large with max---------------------
//-----------------------------------------------------------

const large = Math.max(15, 35, 55);
// console.log(large);

//-----------------------------------------------------------
//-----------------------------splice------------------------
//-----------------------------------------------------------


const friends = [35, 47, 39, 65, 55, 57, 59, 67, 93, 95, 97];

// Removes elements from an array 
// and, if necessary, inserts new elements in their place, 
// returning the deleted elements.
// will change the original array
const partial = friends.splice(99, 51, 73);
// console.log(partial);
// console.log(friends);

//-----------------------------------------------------------
//------------------------------slice------------------------
//-----------------------------------------------------------

const friend = [35, 47, 39, 65, 55, 57, 59, 67, 93, 95, 97];
// dont chang the array

const part = friends.slice(2, 5);
// console.log(part);
// console.log(friend);

//-----------------------------------------------------------
//---------------------------substring-----------------------
//-----------------------------------------------------------

const sentence = 'this is string'
const partial1 = sentence.substring(3, 7);

// console.log(partial1);

//-----------------------------------------------------------
//-----------------------------split-------------------------
//-----------------------------------------------------------
const sentences = 'this is string. another one. more.'

const sentences1 = sentences.split(' ');
const sentences2 = sentences.split('.')
const sentences3 = sentences.split('');

// console.log(sentences3);

//-----------------------------------------------------------
//----------------------------abs----------------------------
//-----------------------------------------------------------

let c = -5;
let a = Math.abs(c);
const b = Math.abs(-5);

// console.log(b);
