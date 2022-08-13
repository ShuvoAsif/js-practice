// ---------------------------------------------------
// -----------------------loops-----------------------
// ---------------------------------------------------

// -----------------------while-----------------------

// 1. Loop variable
// 2. condition inside while
// 3. Loop body
// 4. Change the loop variable

var cakegiven = 0;
while (cakegiven < 7) {
    // console.log('cake den, now')
    // console.log(cakegiven)
    cakegiven++;
}

//------display 1 to 15 by while-----
var num = 1;
while (num <= 15) {
    // console.log(num);
    num++;
}

//-----odd num 1 to 50 by while-----
var num = 1;
while (num <= 50) {
    // console.log(num);
    num += 2;
}

//-----even num 1 to 50 by while-----

var num = 0;
while (num <= 50) {
    // console.log(num);
    num += 2;
}

//----------------------------for-----------------------------

//  1. Loop variable inside for
//  2. condition inside for
//  3. change the loop variable inside for
//  4. loop body

for (var cakegiven = 0; cakegiven < 7; cakegiven++) {
    // console.log('cake den, now')
}

//-------simple version of for loop--------
//------display  1 to 15 by for loop-------

for (var i = 1; i <= 15; i++) {
    // console.log(i)
}

//-----odd num 1 to 50 by for-----

for (i = 1; i <= 50; i += 2) {
    // console.log(i)
}

//-----even num 1 to 50 by for-----

for (i = 0; i <= 50; i += 2) {
    // console.log(i)
}

//-----------------array loop-----------------
//-----display every element of an array------

var nums = [33, 35, 39, 43, 47, 49, 51];

for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    // console.log(num);
}

var items = ['ram', 'ssd', 'processor', 'keyboard', 'display'];

for (var i = 0; i < items.length; i++) {
    var item = items[i];
    // console.log(item)
}

//------------------reverse awy---------------------
// --------------------while------------------------

var num = 10;
while (num >= 1) {
    // console.log(num);
    num--;
}

//-----------------for------------------

for (num = 10; num >= 1; num--) {
    // console.log(num);
}

//---------------------------break---------------------------
//-------------if condition fullfill loop stop---------------

var numbers = [47, 85, 87, 37, 35, 57, 59, 179, 43, 79, 99];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 100) {
        break;
    }
    // console.log(number);
}


var items = ['ram', 'ssd', 'processor', 'keyboard', 'display'];

for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 'keyboard') {
        break;
    }
    // console.log(item)
}

//-------------------------continue---------------------------
//------------if condition fullfill loop continue-------------


var numbers = [47, 85, 87, 37, 35, 57, 59, 179, 43, 79, 99];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 70) {
        continue
    }
    // console.log(number);
}

//-----------------------------------------------------------
//-----------------------object looping----------------------
//-----------------------------------------------------------

var cart = {
    ram: 3,
    ssd: 1,
    keyboard: 5,
    display: 1,
    battery: 7,
    pen: 9
}

const keys = Object.keys(cart);
// console.log(keys);

const values = Object.values(cart);
// console.log(values);


for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = cart[propertyName];
    // console.log(propertyName, propertyValue);
}

//-----for in loop-----

for (var propertyName in cart) {
    const value = cart[propertyName];
    // console.log(propertyName, value);
}

//-----------------------------------------------------------
//--------------------------function-------------------------
//-----------------------------------------------------------



// function functionName (parameters){
//     function body
//     return 
// }

// var returnedValue = functionName(parameters value) 

const a1m = 58;
const a2m = 58;
const a3m = 60;

function getAverage(a1, a2, a3) {
    const total = a1 + a2 + a3;
    const average = total / 3;
    return average;
}

const myAverage = getAverage(a1m, a2m, a3m);
// console.log(myAverage)
// console.log(myAverage.toFixed(3))

//---------------------------------------------------------
//-------------------------reverse-------------------------
//---------------------------------------------------------

function reverseWords(str) {
    const words = str.split(' ');
    const result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}


const myString = 'I am a good boy';
const reverse = reverseWords(myString);
// console.log(reverse)

//---------------------remove duplicate--------------------


const names = ['dhaka', 'chittagong', 'khulna', 'cumilla', 'dhaka', 'khulna', 'khulna', 'chandpur'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);