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


// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Sando genji</li>
</ul>
`
mainContainer.appendChild(sectionDress);


//--------------------------------------------------------------
//------------------------createlement--------------------------
//--------------------------------------------------------------

document.createElement('tagName')
tagName.innerText = 'newText'
