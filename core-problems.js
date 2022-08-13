//------------------sumOfNumbers-------------------

function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
        // console.log(i, sum);
    }
    return sum;
}

var total = sumOfNumbers(7);
// console.log(total)

//-------------------sumOfAnArray------------------

function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

const oddNumbers = [55, 67, 49, 79, 37, 47, 95];
const oddNumberSum = getSumOfAnArray(oddNumbers);
// console.log('odd number sum', oddNumberSum);

//--------------------isLeapYear-------------------

function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const leapYear = isLeapYear(2007);
// console.log(leapYear)

//-----------------------isEven--------------------

function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const numberIsEven = isEven(90);
// console.log(numberIsEven)

//----------------getOddNumbersOfAnArray-------------


function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) {
            // console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [36, 67, 49, 76, 36, 49, 95];
const NoddNumbers = getOddNumbersOfAnArray(myNumbers);
// console.log(NoddNumbers);

//----------------------inchToFeet-------------------

function inchToFeet(inchs) {
    const feet = inchs / 12;
    return feet;
}
const inch = 36;
const inFeet = inchToFeet(inch);
// console.log(inFeet)

//-------------------milesToKiolometer----------------

function milesToKiolometer(miles) {
    const kilometer = miles * 1.609;
    return kilometer;
}
const myMiles = 7;
const inKilometer = milesToKiolometer(myMiles);
// console.log(inKilometer)

//----------------------factorial----------------------


function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

const tresult = factorial(5);
// console.log(tresult);


function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorial(i - 1);
}

const uresult = factorial(5);
// console.log(uresult)

//-------------------factorial reverse------------------

function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
    }
    return result;
}
const number = 5;
const fact = factorial(number);
// console.log('factorial of:', number, fact);

//---------------------factorial while-------------------

function factorial(number) {
    let num = 1;
    let result = 1;
    while (num <= number) {
        result = result * num;
        num++;
    }
    return result;
}
const nresult = factorial(5);
// console.log(nresult);

//------------------factorial while reverses-------------

function factorial(number) {
    let i = number;
    let result = 1;
    while (i >= 1) {
        result = result * i;
        i--;
    }
    return result;
}
const output = factorial(5);
// console.log(output)

//-----------------match product in array object-----------------

const products = [
    { id: 1, name: 'xiami phone One night', price: 19000 },
    { id: 2, name: 'iphone', price: 19000 },
    { id: 3, name: 'mac book air', price: 119000 },
    { id: 4, name: 'lenovo yoga laptop 2025', price: 19000 },
    { id: 5, name: 'Dell inspiron laptop', price: 19000 },
    { id: 6, name: 'Samsung Phone note 7', price: 19000 },
    { id: 7, name: 'Nokia old age Phone gone', price: 19000 },
    { id: 8, name: 'Phone one', price: 19000 },
    { id: 8, name: 'M1 chip not cheap LapTOP', price: 19000 },
];

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'laptop');
// console.log(result);

//--------------------find the higest number--------------------


function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const heights = [165, 197, 135, 167, 139, 365];
const tallest = maxInArray(heights);
// console.log('tallest person is: ', tallest);

//-------------------------asignment--------------------------------


//------------------radianToDegree---------------

function radianToDegree(radian) {
    if (typeof radian === 'number') {
        let degree = radian * (180 / Math.PI);
        degree = degree.toFixed(2);
        degree = parseFloat(degree);
        return degree;
    }
    else {
        return 'Please enter a number';
    }
}

// const getDegree = radianToDegree(199);
// console.log(getDegree)

//----------------isJavaScriptFile--------------

function isJavaScriptFile(String) {
    if (typeof String === 'string') {
        let reversed = '';
        for (let i = String.length - 1; i >= 0; i--) {
            const element = String[i];
            reversed = reversed + element;
        }
        const newReversed = reversed.toLowerCase();
        if (newReversed.indexOf('s') === 0 && newReversed.indexOf('j') === 1 && newReversed.indexOf('.') === 2) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return 'Please enter a string';
    }
}

// const jsFile = isJavaScriptFile('new.js');
// console.log(jsFile);

//--------------oilPrice--------------

function oilPrice(diselLiter, petrolLiter, octaneLiter) {
    if (typeof diselLiter === 'number' && typeof petrolLiter === 'number' && typeof octaneLiter === 'number') {
        const diselPrice = 114;
        const petrolPrice = 130;
        const octanePrice = 135;
        const totalDiselPrice = diselPrice * diselLiter;
        const totalPetrolPrice = petrolPrice * petrolLiter;
        const totalOctanePrice = octanePrice * octaneLiter;
        const total = totalDiselPrice + totalPetrolPrice + totalOctanePrice;
        return total;
    }
    else {
        return 'Please enter numbers';
    }
}

// const coast = oilPrice(1, 1, 1);
// console.log(coast);

//-------------publicBusFare------------

function publicBusFare(passengers) {
    const busCapacity = 50;
    const microbusCapacity = 11;
    const publicBusTicketPrice = 250;
    if (typeof passengers === 'number') {
        const microbusPassengers = passengers % busCapacity;
        const publicBusPassengers = microbusPassengers % microbusCapacity;
        const totalPublicBusTicketPrice = publicBusTicketPrice * publicBusPassengers;
        return totalPublicBusTicketPrice;
    }
    else {
        return 'Please enter a number';
    }
}

// const total = publicBusFare(365);
// console.log(total);

//---------------isBestFriend--------------

function isBestFriend(object1, object2) {
    if (typeof object1 === 'object' && typeof object2 === 'object') {
        if (Array.isArray(object1) !== true && Array.isArray(object2) !== true) {
            const name1 = object1.name.toLowerCase();
            const name2 = object2.name.toLowerCase();
            const friend1 = object1.friend.toLowerCase();
            const friend2 = object2.friend.toLowerCase();
            if (name1 === friend2 && friend1 === name2) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return 'Please enter objects';
        }
    }
    else {
        return 'Please enter objects';
    }
}

// const friend = isBestFriend({ name: "abul", friend: "sabul" }, [{ name: "kabul", friend: "abul" }]);
// console.log(friend);

//---------------startsWith endsWith----------------

function isJavaScriptFile(String) {
    if (typeof String === 'string') {
        if (String.endsWith('.js')) {
            return true;
        }
    }
    else {
        return 'Please enter a string';
    }
}

const types = isJavaScriptFile('n.js');
console.log(types);


function isJavaScriptFile(String) {
    if (typeof String === 'string') {
        if (String.startsWith('n')) {
            return true;
        }
    }
    else {
        return 'Please enter a string';
    }
}

const typesn = isJavaScriptFile('n.js');
console.log(typesn);