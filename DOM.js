//---------------------------------------------------------------
//------------------------------DOM------------------------------
//---------------------------------------------------------------


//The Document Object:

//1.When an HTML document is loaded into a web browser, it becomes a document object.

//2.The document object is the root node of the HTML document.

//3.The document object is a property of the window object.

//4.The document object is accessed with: document.


//'for each and for of' can use for nodeLIst which is get by queryselectorall.
//'for of' use for get by id and class .


//---------------------------------------------------------------
//---------------------------getElement--------------------------
//---------------------------------------------------------------


// option-1: getElementsByTagName:

// will give array like Object
const allHeadings = document.getElementsByTagName('h1');
for (const h1 of allHeadings) {
    // console.log(h1);

    //---toShowInnertext---

    // console.log(h1.innerText);
}

// option-2: getElementById:

const fruitsTitle = document.getElementById('fruits-title');

//---setNewInnerText/value---

fruitsTitle.innerText = 'Fruits changed by JS';

//---to get innerText---
document.getElementById('fruits-title').innerText
document.getElementById('fruits-title')[0].innerText


// option-3: getElementsByClassName:

const places = document.getElementsByClassName('important-places');
for (const place of places) {
    // console.log(place)

    //---toShowInnertext---

    // console.log(place.innerText)

    //----------------------to set innerHtml----------------------

    document.getElementsByClassName('important-places')[o] = <h3>new html</h3>
    //---to get innerHtml---

    const main = document.getElementById('main-container');
    const section = document.createElement('section');
    section.innerHTML = `
    <h1> My dynamic section</h1>
    <p>Extra text added inside paragraph</p>
    <ul>
        <li>first item</li>
        <li>first item</li>
        <li>first item</li>
        <li>first item</li>
    </ul>
`
    main.appendChild(section);

    document.getElementsByClassName('important-places').innerHtml
    document.getElementsByClassName('important-places')[0].innerHtml
}

// option-4: querySelectorAll:
//---by css selector id---

const someL = document.querySelectorAll('#fruits-container li');

// option-5: querySelectorAll:
//---by css selector class---

const someLi = document.querySelectorAll('.fruits-container li');
// console.log(someLi);
for (const li of someLi) {
    // console.log(li.innerText);
}
//---to get first element of li---

const someLi1 = document.querySelector('.fruits-container li');

//--------------------------------------------------------------
//---------------------------toStyle----------------------------
//--------------------------------------------------------------

const some = document.querySelectorAll('#fruits-container li').style.textAlign = 'center'

//--------------------------------------------------------------
//-----------------------to get attribute-----------------------
//--------------------------------------------------------------

const title = document.getelementId('fruits-title');
// 1:
title.getAttribute('class')
// 2:
title.classList

//---to remove Attribute---
title.classList.remove('attributeName')

//---to add Attribute---
title.classList.add('attributeName')

//---to setAttribute---
title.setAttribute('attributeName, value')

//---to create attribute---
title.createAttribute('localName, string')


//--------------------------------------------------------------
//-------------------------to add class-------------------------
//--------------------------------------------------------------


newtagname.classList.add('classname')

//--------------------------------------------------------------
//-----------------------------node-----------------------------
//--------------------------------------------------------------

const titles = document.getelementId('fruits-title');

//---to get parentNode---
titles.parentNode

//---to get childnodes---
titles.childnodes

//---to get firstchild---
titles.firstchild

//---to get childnodes by index---
titles.firstchild[1]

//---to get node sibling---
titles.nextSibling

//---------------------------to add-----------------------------
titles.appendChild('tagName')

// 1. where to add
const placesList = document.getElementById('places-list');
// 2. what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

// 3. add the child
placesList.appendChild(li);

// 1. where to ad
const mainContainer = document.getElementById('main-container');

// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biryani'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'salad'
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

//------------------------------------------------------------------
//--------------------toset innerHTML directly----------------------
//------------------------------------------------------------------


// {/* <main id="main-container"> */}
// <section>
// <h1>My Awesome DOM de baba</h1>
// <ul>
// <li>Jalali Set</li>
// <li>Shafayet</li>
// <li>bonobash</li>
// <li>DOM de re baba</li>
// </ul>
// </section>
// <section class="fruits-container">
// <h1 id="fruits-title" class="some-class random-class blue-bg">Fruits I like</h1>
// <ul>
// <li>Apple</li>
// <li>Banana</li>
// <li>Carrot</li>
// </ul>
// </section>
// <section id="places-container" class="large-text">
// <h1 id="places-title">Places I like to visit</h1>
// <ul id="places-list">
// <li class="important-places">Soondarban</li>
// <li class="important-places">bandorban</li>
// <li class="important-places">Kataban</li>
// <li class="other-place">shalbon</li>
// </ul>
// </section>
// </main>

const main = document.getElementById('main-container');
const nsection = document.createElement('section');
section.innerHTML = `
    <h1> My dynamic section</h1>
    <p>Extra text added inside paragraph</p>
    <ul>
        <li>first item</li>
        <li>first item</li>
        <li>first item</li>
        <li>first item</li>
    </ul>
`
main.appendChild(section);


//--------------------------------------------------------------
//------------------------createlement--------------------------
//--------------------------------------------------------------

document.createElement('tagName')
tagName.innerText = 'newText'

//--------------------------------------------------------------
//-----------------------addEventListener-----------------------
//--------------------------------------------------------------

// option 1: directly set on the HTML element
// <button onclick="console.log(65)">Another button</button>

//  option 2: add onclick function on the html element
// IMPORTANT: We will use this
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//  option: 3 
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


// option: 3 another 
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'
}

// option: 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option: 4 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});

// option: 4 Final
// IMportant: We will use this sometimes
// document.getElementById('make-goldenrod').addEventListener('click', function(){})
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})

//---------------------------------------------
//-------------------most use------------------
//---------------------------------------------

// {/* <button onclick="handleOnClick()">Handle Event by Add onclick Function</button> */ }
// {/* <button id="event-listener">Handle event by addEventListener</button> */}
// {/* <script> */ }
// option 1
function handleOnClick() {
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Handled by function attached on onclick attribute';
}
// option 2
document.getElementById('event-listener').addEventListener('click', function () {
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Text updated by add Event listener button'
})

// option 2: recap
document.getElementById('btn-update').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const p = document.getElementById('input-text-display');
    p.innerText = inputText;
    inputField.value = '';
})
// {/* </script> */ }

//-------------------more event-----------------


// <h1>Explore More events</h1>
// <button id="btn-more">Events</button>
// <input id="text-field" type="text">

// document.getElementById('text-field').addEventListener('focus', function(){
//     console.log('Event triggered inside the input field')
// })
// document.getElementById('text-field').addEventListener('blur', function(){
//     console.log('Event triggered inside the input field blur')
// })
// document.getElementById('text-field').addEventListener('keydown', function(event){
//     console.log(event.target.value)
// })
// document.getElementById('text-field').addEventListener('keypress', function(event){
//     console.log(event.target.value)
// })
document.getElementById('text-field').addEventListener('keyup', function (event) {
    console.log(event.target.value)
})
document.getElementById('btn-more').addEventListener('mousemove', function () {
    console.log('Event Triggered');
});

//--------------------------------------------------------------------
//-------------------------github delet button------------------------
//--------------------------------------------------------------------

// {/* <h1 id="secret-info">My secret info</h1> */ }
// {/* <input id="delete-confirm" type="text" placeholder="please type delete"> */ }
// {/* <button id="btn-delete" disabled>Delete</button> */ }
document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-delete');
    if (text === 'delete') {
        deleteButton.removeAttribute('disabled');
    }
    else {
        deleteButton.setAttribute('disabled', true);
    }
})
document.getElementById('btn-delete').addEventListener('click', function () {
    const secret = document.getElementById('secret-info');
    secret.style.display = 'none';
})

//--------------------------------------------------------
//------------------------comment-------------------------
//--------------------------------------------------------


// <h1>Please add your comment</h1>
// <div id="comment-container">
// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque aperiam autem nisi ipsam suscipit fugit quisquam earum atque inventore eos eligendi quasi repudiandae vel dicta, libero expedita voluptatem nemo perspiciatis odit officiis. Molestias consequuntur excepturi maiores reprehenderit qui explicabo, quidem fugit voluptatibus officiis, facilis voluptates deserunt, non quod ratione quisquam?</p>
// <p>Soluta dolores iure consectetur vel laboriosam quia nihil ut eveniet mollitia nostrum numquam quas explicabo voluptates amet, laborum architecto totam quos voluptatum quaerat? Itaque est reiciendis excepturi qui, id quisquam, vero asperiores nemo earum eos molestiae eaque ex quaerat provident! Sequi voluptas dolorem impedit accusamus repellendus laudantium eveniet rerum laborum!</p>
// <p>Doloremque eius commodi pariatur? Ea, libero doloribus temporibus eos exercitationem, quo sed vero quaerat eveniet alias fuga quas, fugit porro quod sit. Tempore rem aliquam id culpa dolorem voluptatum cum illo labore. Non, fuga sapiente, iure ab, dicta deserunt magni illo sunt explicabo expedita cupiditate voluptatem consequatur voluptate nobis doloribus.</p>
// </div>//
// <div>
// <textarea name="" id="new-comment" cols="60" rows="5"></textarea>
// <br>
// {/* <button id="btn-post">Post</button> */}
// </div>
// step-1: add event listener to the post button
document.getElementById('btn-post').addEventListener('click', function () {
    // step-2: get the comment inside the text area
    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value;

    // step-3: set the comment  inside the comment container
    // 1. get the comment conatiner
    // 2. create a new element (p tag)
    // 3. set the text of the comment as innerText of the p tag
    // 4. add the p tag using appendChild
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newComment;
    commentContainer.appendChild(p);

    // step-4: clear the text area
    commentBox.value = '';
})


//--------------------------------------------------------------
//---------------------------bubble-----------------------------
//--------------------------------------------------------------


//-------------to stop bubble without siblingnode---------------

document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('Item-2 clicked');
    event.stopPropagation();
})

//-----------------------to stop bubble--------------------------

document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('Item-2 clicked');
    event.stopImmediatePropagation();
});

//-------------------------event bubble--------------------------


// {/* <body id="body"> */}
// <h1>Exploring Event Bubble</h1>
// <section id="list-container">
// <ul id="list-ul">
// <li id="item-1">Lorem, ipsum.</li>
// <li id="item-2">At, repudiandae.</li>
// <li id="item-3">Explicabo, dolorem.</li>
// <li id="item-4">Veritatis, perspiciatis!</li>
// <li id="item-5">Accusantium, officia.</li>
// <li id="item-6">quibusdam!</li> }
// </ul >
// </section >
// <script>
document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('Item-2 clicked');
    event.stopImmediatePropagation();
});
document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('Item-2 second clicked');
});
document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('Item-2 third clicked');
});
document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('Item-2 fourth clicked');
});
document.getElementById('list-ul').addEventListener('click', function () {
    console.log('ul clicked');
})
document.getElementById('list-container').addEventListener('click', function () {
    console.log('section container clicked');
})
document.getElementById('body').addEventListener('click', function () {
    console.log('body of the html clicked');
})
// </script>
// </body >

//--------------------------------------------------------------
//----------------------------delegate--------------------------
//--------------------------------------------------------------

// delegate to parentnode


// < body >
// <h1>Explore Event Delegate</h1>
// <section>
// <ul id="list-container">
// <li class="item">Lorem, ipsum dolor.</li>
// <li class="item">Facilis, repellendus ullam!</li>
// <li class="item">Pariatur, quo beatae.</li>
// <li class="item">Iure, accusamus explicabo!</li>
// <li class="item">Reprehenderit, suscipit minus!</li>
// <li class="item">Earum, dolores eius?</li>
// </ul>
// <button id="btn-add-item">Add Item</button>
// </section>
// <script>
// const items = document.getElementsByClassName('item');
// for (const item of items) {
// item.addEventListener('click', function (event) {
// event.target.parentNode.removeChild(event.target);
// })
// }

document.getElementById('list-container').addEventListener('click', function (event) {
    console.log(event.target);
    event.target.parentNode.removeChild(event.target);
})



document.getElementById('btn-add-item').addEventListener('click', function () {
    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li');
    li.innerText = 'Brand New Item added';
    li.classList.add('item');
    listContainer.appendChild(li);
})
    // </script>
// </body >
