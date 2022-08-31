

/*
<body>
    <header>
        <h1>Welcome to my friend website</h1>
    </header>
    <main>
        <sectionclass="friends">
            <!-- .friend*5>h3.friend-name{Friend-$}+p>lorem5 -->
            <div  id="friends" >
                <div class="friend">
                    <h3 class="friend-name">Friend-1</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="friend">
                    <h3 class="friend-name">Friend-2</h3>
                    <p>Magnam sunt eveniet quod molestiae.</p>
                </div>
                <div class="friend">
                    <h3 id="third-friend" class="friend-name">Friend-3</h3>
                    <p>Magnam veniam sint esse vel.</p>
                </div>
                <div class="friend">
                    <h3 class="friend-name">Friend-4</h3>
                    <p>Ipsa voluptatem excepturi cumque iure.</p>
                </div>
                <div class="friend">
                    <h3 class="friend-name">Friend-5</h3>
                    <p>Beatae aut expedita ut deleniti.</p>
                </div>
            </div>
            <div class="operations">
                <button id="apply-bg">apply Background</button>
                <button id="center-third">center the Third</button>
                <button id="add-friend">Add New Friend</button>
            </div>
        </section>
    </main>
    <script src="js/dom.js"></script>
</body>*/

//-----------------------------------------------------------------------
//----------------------------arrow function-----------------------------
//-----------------------------------------------------------------------

// function declaration 
/* function add(first, second){
    const total =  first + second;
    return total;
} */

const number = 56;

// function expression 
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}
// function expression with anonymous function
const add2 = function (first, second) {
    const total = first + second;
    return total;
}


function add4(first, second) {
    return first + second;
}

const add5 = function (first, second) {
    return first + second;
}

// arrow function
const add6 = (first, second) => first + second;

const nresults = add6(10, 20);
console.log(nresults);

// interview question: differences between 
// function declaration, function expression and arrow function


//--------------------------more arrow function--------------------------


const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;

const nresult = multiply(7, 8);
// console.log(nresult)

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

// no parameter arrow function
const getPie = () => 3.14;

// one parameter
const doubleIt = (num) => num * 2;

// one parameter simple version
const fiveTimes = num => num * 5;

// multi line arrow function
// if you want to return something, use the return 
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}


//---------------------------------------------------------------------
//------------------------default value function-----------------------
//---------------------------------------------------------------------

/* function add(first, second){
    console.log(first, second);
    // second = second || 0;
    // if(second === undefined){
    //     second = 0;
    // }
    const total = first + second;
    return total;
} */


function add(first, second = 0) {
    const total = first + second;
    return total;
}

const results = add(10);
console.log(s);

function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}

const names = fullName('Gelam');
console.log(names);

//----------------------------------------------------------------------
//-----------------------------destructuring----------------------------
//----------------------------------------------------------------------

const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: '017176588899',
    price: 4000
}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const { phone } = fish;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);

const { age, name } = { name: 'Almas', age: 56, profession: 'makeup artist' }
console.log(age);

const { address } = fish;
console.log(address);

// array destructuring
const [first, another] = [44, 99, 88, 456];
console.log(first, another);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames() {
    return ['Alim', 'Halim'];
}

const [baba, chacha] = getNames();
console.log(chacha, baba);

//---------------------------------------------------------------------
//------------------------------spread---------------------------------
//---------------------------------------------------------------------

const max = Math.max(12, 85, 999, 78);
// console.log(max);
const nnumbers = [12, 85, 999, 78];
const largest = Math.max(...nnumbers);
// console.log(...numbers);
// console.log(largest);

// (...)makes a array's values sapareted

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(7777);
console.log(numbers);
console.log(numbers2);

const numbers3 = [...numbers];

const numbers4 = [444, 78, ...numbers, 111, 33]


//------------------------------------------------------------------
//--------------------------use of backtic--------------------------
//------------------------------------------------------------------

const person = 'Adam Sand';
const person2 = "Ben White";
const person3 = `Donald Trump`;

const multiLine = 'First Line text \n' +
    'second line of code \n' +
    'Third line of text \n' +
    'Fourth line of string';
// console.log(multiLine)

const newMultiLine = `First Line of text
Second LIner of text
third line of string
fourth line of code`;

// console.log(newMultiLine)

const a = 20;
const b = 30;
const nums = [78, 98, 45, 12, 6, 444]
const summary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a + b);
// console.log(summary)

const newSummary = `sum of ${a} and ${b} is: ${a + b}`;
// console.log(newSummary)


const getGirlFriend = (name = "chokina") => "name";
// console.log(getGirlFriend());

//---------------------------------------------------------------------
//------------------------------chaining-------------------------------
//---------------------------------------------------------------------

const users = [{ id: 1, name: 'abul', job: 'doctor' }]

// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'dabul', job: 'leader' },
    ]
}
const firstJob = data.data[0].job;
// console.log(firstJob);

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}

const userFloor = user.address?.stret?.second;
// console.log(userFloor);

//---------------------------------------------------------------
//-----------------------------map-------------------------------
//---------------------------------------------------------------

const numbers = [2, 8, 4, 6, 3];


function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

function doubleItOld(num) {
    return num * 2;
}


const doubleIts = num => num * 2;

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2)
const makeDouble2 = numbers.map(x => x * 2);
// console.log(makeDoubleDirect);
const fiveTimess = [1, 2, 3, 4, 5].map(x => x * 5);
// console.log(fiveTimes);
/* 
purpose: 
1. get an array
2. for every elements of the array do something
3. store the result in an array
4. return the result array
*/

const result = getDoubles(numbers);
// console.log(result);
// console.log(makeDouble);


const nnnumbers = [12, 56, 87, 44];
const half = nnnumbers.map(n => n / 2)
const thirds = nnnumbers.map(x => x / 3);
// console.log(half);
// console.log(thirds);

const friendss = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'TOM Solaiman'];
const firstLetters = friendss.map(friends => friends[0]);
// console.log(firstLetters);
const nameLengths = friendss.map(friends => friends.length);
// console.log(nameLengths);

const nproductss = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 23000 },
];

// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
const prices = products.map(p => p.price);
// console.log(items)
// console.log(prices);

//----------------------------------------------------------------
//-----------------------------filter-----------------------------
//----------------------------------------------------------------

const numbeers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNums = numbeers.filter(number => number > 20);
const tiny = numbeers.filter(n => n < 10);
const even = numbeers.filter(num => num % 2 === 0);
// console.log(even);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 23000 },
];

// const expensive = products.filter(product => product.price > 100000);
// const expensive = products.filter(product => product.price > 100);
const expensive = products.filter(product => product.price < 100);
// console.log(expensive);

//-----------------------------------------------------------------
//------------------------------find-------------------------------
//-----------------------------------------------------------------

const numbersn = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

const fives = numbersn.find(num => num % 5 === 0)
const fivesAll = numbersn.filter(num => num % 5 === 0);

// console.log(fives);
// console.log(fivesAll);

const nproducts = [
    { id: 1, name: 'laptop', price: 65000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 30000 },
    { id: 4, name: 'tablet', price: 23000 },
];

const cheap = nproducts.find(nproduct => nproduct.price < 40000);
// console.log(cheap)

//------------------------------------------------------------------
//-----------------------------reduce-------------------------------
//------------------------------------------------------------------

// map, forEach, filter, find, reduce
const nummberss = [1, 2, 3, 4, 5];
// .reduce (accumulatorFunction, initial value)
// accumulatorFunction use two parameters 
// const total = numbers.reduce( (previous, current) => previous + current , 0);
const total = nummberss.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current
}, 0);
// console.log(total);

//-----------------------------------------------------------------
//------------------------------forEach----------------------------
//-----------------------------------------------------------------

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'TOM Solaiman'];

friends.forEach(friend => {

})


const productss = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 23000 },
];

// productss.forEach(products => console.log(products));

//-----------------------------------------------------------------
//----------------------------class--------------------------------
//-----------------------------------------------------------------

// syntactic sugar
class Instructor {
    name;
    designation = 'Web Course Instructor'
    team = 'web team'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        // console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        // console.log(`please create quiz for module ${module}`)
    }
}
const aamir = new Instructor('aamir', 'mumbai')
// console.log(aamir);
aamir.startSupportSession('9.00');
aamir.createQuiz(60);

const solaiman = new Instructor('Solaiman Khan', 'dhaka')
// console.log(solaiman);

//-----------------------------------------------------------------
//----------------------------extends------------------------------
//-----------------------------------------------------------------

class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        // console.log(`${this.name} thank you for your feedback.`)
    }
}
class Instructor extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'web team';
    constructor(name, location) {
        super(name, location);
    }
    startSupportSession(time) {
        // console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        // console.log(`please create quiz for module ${module}`)
    }
}

class Developer extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'web team'
    tech;
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature) {
        // console.log(`Please develop the  ${feature}`)
    }
    release(version) {
        // console.log(`please release the version ${version}`)
    }
}

class JobPlacement extends TeamMember {
    designation = 'Job Placement Commandos'
    team = 'Job Placement'
    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }
    provideResume(feature) {
        // console.log(`Please develop the  ${feature}`)
    }
    prepareStudent(version) {
        // console.log(`please release the version ${version}`)
    }
}

const alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
// console.log(alia);
alia.provideFeedback();
const bipasha = new JobPlacement('bipasha', 'kolkata', 'India');
// console.log(bipasha);


//------------------------------------------------------------
//------------------------notation----------------------------
//------------------------------------------------------------

const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },

}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject];
const marks2 = student.marks[subject];
// console.log(marks2);