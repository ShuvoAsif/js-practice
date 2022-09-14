//--------------------------common-js-concepts----------------------------
//------------------------------------------------------------------------
//-----------------------------undefine-----------------------------------
//------------------------------------------------------------------------

/* 
 8 ways to get Undefine
1. variable that is not initialized will give undefined
2. function with no return 
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that doesn't exists on an object will give you undefined
6. accessing array elements outside of the index range 
7. deleting an element inside an array
8. set a value directly to undefined
*/

let first;

function second(a, b) {
    const total = a + b;
}

const result = second();

function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

// third(2, 5);

// console.log(result);

function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return a + b;
}

const total = noNegative(2, -5);
// console.log(total);
const fifth = { id: 2, name: 'ponchom', age: 40 }
// console.log(fifth.age, fifth.salary);

const sixth = [4, 89, 87, 56, 54];
// you should not do it. Instead use splice
delete sixth[1];
// console.log(sixth[1], sixth[5], sixth[200]);
// console.log(sixth);

const eighth = undefined;

const ninth = null;

const data = { results: [], updated: null }

// console.log(typeof undefined);
console.log(typeof null);

//------------------------------------------------------------------------
//-------------------------------triple-----------------------------------
//------------------------------------------------------------------------

// always use ===
// equal comparison doesnt work for non-primitive

const firrst = [45, 54, 98];
const second = [45, 54, 98];
if (firrst === second) {
    console.log('values are equal')
}
else {
    console.log('values are not equal');
}

// type coercion
// type conversion
// type casting



//------------------------------------------------------------------------
//-----------------------------true-false---------------------------------
//------------------------------------------------------------------------

/* 
Truthy:
1. true
2. any number (+ve, -ve) will be truthy other than 0
3. any string other than empty string
4. '0', 'false'
5. {}
6. []


Falsy:
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
*/
let xc = [5, 6];
console.log(xc);
if (xc) {
    console.log('value of xc is truthy');
}
else {
    console.log('value of xc is falsy');
}

// optional 
// check falsy
const yc = null;
if (!yc) {
    console.log('value is falsy')
}
const z = { class: 9 };
// check true
if (!!x) {
    console.log('value is truthy');
}

//------------------------------------------------------------------------
//--------------------------------types-----------------------------------
//------------------------------------------------------------------------

// strongly typed Language
// int a = 5;
// string b = 'alim halim khalim';
// bool c = True;
// object student = { name: 'noya dhman', id: 55}
// int[] numbers = [12, 45, 78]
// string[] friends = ['abul', 'babul'];

// JavaScript is a dynamic typed Language

// primitive type
const a = 5;
const b = 'Samsu kopai na ekhon ar';
const d = true;


// non-primitive 
const ages = [45, 65, 48];
const student = { id: 23, class: 7 };

// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = { job: 'web developer' }
let q = p;
q.job = 'front end developer';
console.log(p, q);

//------------------------------------------------------------------------
//------------------------------arguments---------------------------------
//------------------------------------------------------------------------

// array like object
function sum(a, b, c) {
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const totals = sum(45, 89, 12, 45, 98, 56);
// console.log(total);
console.log(sum.length);

//------------------------------------------------------------------------
//-------------------------------callback---------------------------------
//------------------------------------------------------------------------

function greeting(greetingHandler, name) {
    greetingHandler(name);
}
// const name = 'Halim mama';
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};
function greetingHandler(name) {
    console.log('Good Morning', name);
}

function greetEvening(name) {
    console.log('Good Evening', name);
}

function greetNight(name) {
    console.log('Good Night', name);
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');
greeting(greetEvening, 'Tom Solaiman');
greeting(greetEvening, 'Tom Salman');
greeting(greetNight, 'Rasel')


function submitHandler() {
    console.log('submit button clicked')
}
document.getElementById('btn-submit').addEventListener('click', submitHandler)

//------------------------------------------------------------------------
//--------------------------------closure---------------------------------
//------------------------------------------------------------------------

function kitchen() {
    let roast = 0;
    return function () {
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

//------------------------------------------------------------------------
//--------------------------------hoisting--------------------------------
//------------------------------------------------------------------------

// print5();
console.log(print10);
print10();
for (let i = 0; i < 5; i++) {
    // console.log(i);
}
// console.log('outside', i);

function print5() {
    console.log('inside print5', 5);
}
var print10 = function () {
    console.log('inside print10', 10);
}

//------------------------------------------------------------------------
//---------------------------------passby---------------------------------
//------------------------------------------------------------------------

// primitive types are pass by value

let num1 = 5;
let num2 = 7;

function multiply(a, b) {
    a = 27;
    const result = a * b;
    return result;
}
console.log(num1);
multiply(num1, num2);
console.log(num1);

// object and array are pass by reference
let student1 = { name: 'Jalil', partner: 'borsha' };
let student2 = { name: 'raj', partner: 'anika' };

function makeMovie(couple1, couple2) {
    couple1.name = 'Ononto';
    couple2.partner = 'mim';
}

console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);

//------------------------------------------------------------------------
//----------------------------------scope---------------------------------
//------------------------------------------------------------------------

function add(a, b) {
    const total = a + b;
    if (b > 5) {
        const sum = 25 + a + b;
    }
    else {
        const sum = 5 + a + b;
        var current = sum;
    }
    console.log(current);
    return total;
}
// console.log(a,b);
// console.log(total);
add(5, 3);