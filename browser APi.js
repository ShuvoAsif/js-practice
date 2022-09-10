//-------------------------------------------------
//--------------------cookies----------------------
//-------------------------------------------------

/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="cookies.js"></script>
</body>
</html>*/

const getCookieByName = name => {
    const cookieString = document.cookie;
    const cookieParts = cookieString.split('; ');
    const cookie = cookieParts.find(c => c.includes(name));
    if (cookie) {
        // country=US
        const cookieValue = cookie.split('=')[1]
        return cookieValue;
    }
}

//----------------------------------------------------
//----------------------prompt------------------------
//----------------------------------------------------

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modal simple</title>
</head>
<body>
    <button onclick="showAlert()">Launch Alert</button>
    <button onclick="askSomething()">Ask Something</button>
    <button onclick="getUserInfo()">Get Info</button>
    <script src="prompt.js"></script>
</body>
</html>
*/

console.log('prompt connected');
// alert('Ki khobor dosto')
const showAlert = () => {
    const num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        alert('ki khobor dosto');
    }
}

const askSomething = () => {
    const decision = confirm('Are you coming Picnic?')
    console.log(decision);
    if (decision === true) {
        alert('dosto 500 tk bkash kor')
    }
    else {
        console.log('DGM !!! Door e giya mor')
    }
}


const getUserInfo = () => {
    const name = prompt('Tell us your name.')
    console.log(name);
    if (!!name) {
        console.log('Welcome here', name);
    }
}

//--------------------------------------------------------
//------------------------cart ls-------------------------
//--------------------------------------------------------

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart</title>
</head>
<body>
    <input id="product-name-field" type="text" placeholder="Product Name">
    <input id="product-quantity-field" type="text" placeholder="Quantity">
    <button onclick="addProduct()" id="btn-add-product">Add Product</button>
    <br>
    <ul id="product-container">

    </ul>
    <script src="js/cart.js"></script>
</body>
</html>
*/

const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () => {
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quantity-field');
    console.log(product, quantity);
    // display product on UI
    addProductToDisplay(product, quantity);

    // set to local storage
    // simple way
    // localStorage.setItem(product, quantity);
    saveItemToLocalStorage(product, quantity);
}

const getShoppingCartFromLocalStorage = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage();
    // add product to the object as property
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);

    // save to local storage
    localStorage.setItem('cart', cartStringified);
}

const addProductToDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}

const displayStoredProducts = () => {
    const cart = getShoppingCartFromLocalStorage();
    for (const product in cart) {
        const quantity = cart[product];
        console.log(product, quantity);
        addProductToDisplay(product, quantity);
    }
}

displayStoredProducts();

//--------------------------------------------------------
//-----------------------local storage--------------------
//--------------------------------------------------------

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Explore Local Storage</title>
</head>
<body>
    <section>
        <input id="name-field" type="text" placeholder="Your Name">
        <button id="btn-add-name">Add to LS</button>
        <button id="btn-remove-name">Remove from LS</button>
        <br>
        <input id="age-field" type="text" placeholder="Your age">
        <button id="btn-add-age">Add To LS</button>
        <button id="btn-remove-age">Remove From LS</button>
        <br>
        <button id="btn-clear-LS">clear LS</button>
    </section>
    <script src="js/storage.js"></script>
</body>
</html>
*/

document.getElementById('btn-add-name').addEventListener('click', function () {
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;

    localStorage.setItem('name', nameValue);
})

document.getElementById('btn-add-age').addEventListener('click', function () {
    const ageField = document.getElementById('age-field');
    const ageValue = ageField.value;

    localStorage.setItem('age', ageValue);
});


document.getElementById('btn-remove-name').addEventListener('click', function () {
    localStorage.removeItem('name');
})

document.getElementById('btn-remove-age').addEventListener('click', function () {
    localStorage.removeItem('age');
});

document.getElementById('btn-clear-LS').addEventListener('click', function () {
    localStorage.clear();
})
