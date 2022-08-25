

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

const result = add6(10, 20);
console.log(result);

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
const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
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
console.log(newSummary)