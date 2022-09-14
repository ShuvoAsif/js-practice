//----------------------------------------------------------------------
//--------------------------array-methods-------------------------------
//----------------------------------------------------------------------

const prroducts = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const brands = prroducts.map(product => product.brand);
// console.log(brands);
const prices = prroducts.map(product => product.price);
// console.log(prices);

// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))

products.forEach(product => {

})


// 3. filter
const cheap = prroducts.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = prroducts.filter(p => p.name.includes('n'));
// console.log(specificName);


//4. find
const special = prroducts.find(p => p.name.includes('n'));
console.log(special);

//----------------------------------------------------------------------
//--------------------------destructuring-------------------------------
//----------------------------------------------------------------------

// 1. array destructuring
const nnumbers = [42, 65];
// const x = nnumbers[0];
// const y = nnumbers[1];

// const [x, y] = [42, 65]


const [x, y] = nnumbers;

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = [90, 34]
const [first, second] = boxify(90, 34);

// console.log(boxify(90, 34));
const sttudent = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const [firstMovie, secondMovie] = sttudent.movies;


// object destructuring
const { name, age } = { name: 'alu', age: 14 };
const { names, ages } = { id: 12, names: 'alu', salary: 3400, ages: 14 };

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const { machine, ide } = employee;
// const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;

//----------------------------------------------------------------------
//-------------------------------ES6------------------------------------
//----------------------------------------------------------------------

const numbbers = [89, 35, 98, 12];
const stuudent = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};

// 1. template string
const about = `My Name is ${stuudent.name} age of ${stuudent.age} has number ${numbbers[2]} also liked movies ${stuudent.movies[0]}`;
console.log(about)

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator
const newNumbers = [...numbers];
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];


numbers.push(99);
numbers.push(99);
numbers.push(99);





console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);

//----------------------------------------------------------------------
//------------------------------fetch-----------------------------------
//----------------------------------------------------------------------

// 1. JSON => stringify, parse

const studentt = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const studentJSON = JSON.stringify(studentt);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);


//2. fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for 
const numbeers = [23, 54, 67, 87, 23, 78];
numbeers.forEach(num => console.log(num));
numbeers.map(num => num * 2);

// for of on array like object
// loop on an object using for in 


// add or remove from an array
const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

// copy products array and then add newProduct 
const newProducts = [...products, newProduct];
// create a new array without one specific item 
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone');

//----------------------------------------------------------------------
//---------------------------fundamentals-------------------------------
//----------------------------------------------------------------------

// 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 2. conditions
// 6 basic conditions: >,<, ===, !==, <=, >= 
// multiple conditions: &&, ||

if (fatherName === 'arnold' || season === 'rainy') {

}
else if (fatherName === 'Arnold') {

}
else {

}

// 3. array declare
// index, 
// length, push, 
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4. for loop 
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    confirm.log(number);
}

// 5. function 
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const output = multiply(35, 78);

// 6. Object
// 3 ways to access property by name 
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student['age']);// access via property name string 
console.log(student[myVariable]); // access via property name in a variable

//----------------------------------------------------------------------
//-----------------------------shortcut---------------------------------
//----------------------------------------------------------------------

// 'almas', 5, true, {}, []
// '', 0, false, null, undefined
// check truthy
let myVar = 5;
// check any truthy 
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {

}

const money = 800;
let food;
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'cha biscuit';
}

// ternary
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);

// number to string conversion
const num1 = 52;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr)

// string to number
const input = '560';
const inputNum = +input;
// console.log(inputNum);

// 
let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive;

//----------------------------------------------------------------------
//------------------------------storage---------------------------------
//----------------------------------------------------------------------

/*
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Storage</title>
</head>

<body>
    <h1>Local Storage and Session Storage</h1>
    <input type="text" placeholder="storage id" id="storage-id">
    <input type="text" placeholder="storage value" id="storage-value">
    <br>
    <button onclick="addToLocalStorage()">Add to Local Storage</button>
    <script src="storage.js"></script>
</body>

</html>
*/

const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    //
    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}

