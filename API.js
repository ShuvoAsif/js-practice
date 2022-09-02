/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="loadData()">Load Data</button>
    <button onclick="loadData2()">Load Data2</button>
    <button onclick="loadUsers()">Load Users</button>
    <button onclick="loadUsers2()">Load Users2</button>
    <button onclick="createAPost()">Create A Post</button>
    <button onclick="deleteAPost()">Delete A Post</button>
    <button onclick="patchAPost()">Update A Post</button>

    <div class="users-container">
        <ul id="users-list">
        </ul>
    </div>


    <!-- scripts -->
    <script src="js/fetch.js"></script>
    <script src="js/app.js"></script>     REST API/CRUD (get,delet,post,patch)
    <script src="js/index.js"></script>
</body>
</html>
*/

// http status code

//-----------------------------------------------------------------
//------------------------------fetch------------------------------
//-----------------------------------------------------------------

/* 
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json)) 
  */
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))

function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data));
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function displayUsers(data) {
    console.log(data);
}

//------------------------------------------------------------------
//-----------------------------REST API-----------------------------
//------------------------------------------------------------------

function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers2(data))
}

function displayUsers2(data) {
    const ul = document.getElementById('users-list');
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}


function deleteAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}

function patchAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function createAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

//-----------------------------------------------------------------
//-------------------------------json------------------------------
//-----------------------------------------------------------------

const user = { id: 1, name: 'Gorib Aamir', job: 'actor' };
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
/* 
{ id: 1, name: 'Gorib Aamir', job: 'actor' }
{"id":1,"name":"Gorib Aamir","job":"actor"}
*/

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj)

//------------------------------------------------------------------
//-------------------------------post-------------------------------
//------------------------------------------------------------------

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Posts</title>
    <style>
        .post{
            background-color: lightskyblue;
            padding: 15px;
            margin: 10px;
            border-radius: 15px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Display All Posts</h1>
    </header>
    <main>
        <section>
            <h3>All Posts are here</h3>
            <div id="posts-container">

            </div>
        </section>
    </main>
    <script src="js/posts.js"></script>
</body>
</html>
*/

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

/* 
1. get the container element where you want to add the new elements
2. create child element
3. set innerText or innerHTML
4. appendChild
*/

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        console.log(post);
        postDiv.innerHTML = `
            <h4>User-${post.userId}</h4>
            <h5>Post: ${post.title}</h5>
            <p>Post Description: ${post.body}</p>
        `;
        postsContainer.appendChild(postDiv);
    }
}

loadPosts();

//------------------------------------------------------------------
//------------------------------todos-------------------------------
//------------------------------------------------------------------

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todos</title>
</head>
<body>
    <header></header>
    <main>
        <section>
            <h1>All my todos here</h1>
            <div id="todo-container">
                
            </div>
        </section>
    </main>
    <script src="js/todos.js"></script>
</body>
</html>
*/

function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
}

function displayTodos(todos) {
    // get the container
    const todoContainer = document.getElementById('todo-container');

    for (const todo of todos) {
        // create the child element
        const todoDiv = document.createElement('div');
        // set innerText or innerHTML
        todoDiv.innerHTML = `
            <h3>title: ${todo.title}</h3>
            <p>User: ${todo.userId}</p>
        `;
        // appendChild
        todoContainer.appendChild(todoDiv);
    }
}

loadTodos();

//------------------------------------------------------------------
//---------------------------countries------------------------------
//------------------------------------------------------------------

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countries </title>
    <link rel="stylesheet" href="style/countries.css">
    <style>
    #countries-container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
}
.country{
    border: 2px solid salmon;
    padding: 20px;
    border-radius: 10px;
}
    </style>
</head>
<body>
    <header>
        <h1>Explore Countries</h1>
    </header>
    <main>
        <section>
            <h3>Country Detail</h3>
            <div id="country-detail"></div>
        </section>
        <section>
            <div id="countries-container">
            </div>
        </section>
    </main>
    <script src="js/countries.js"></script>
</body>
</html>
*/

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    // for(const country of countries){
    //     console.log(country);
    // }
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        // console.log(country);
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
            <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetail = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country detail', code)
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    console.log(country);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h2>Details: ${country.name.common}</h2>
        <img src="${country.flags.png}">
    `
}

loadCountries();

//----------------------------------------------------------------------
//----------------------------randomuser--------------------------------
//----------------------------------------------------------------------

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>International Lover</title>
    <style>
        .user{
            background-color: blanchedalmond;
            margin: 10px;
            padding: 10px;
        }
    </style>
</head>
<body>
    <header>
        <h1>I wanna be an international Lover</h1>
    </header>
    <main>
        <section>
            <h3>All options of lovers here</h3>
            <div id="users-container">
            </div>
        </section>
    </main>
    <script src="js/randomuser.js"></script>
</body>
</html>
*/

const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = users => {
    const usersContainer = document.getElementById('users-container');
    for (const user of users) {
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <h3>User Name</h3>
            <p>Email: ${user.email}</p>
            <p>User Location: ${user.location.city} ${user.location.country}</p>
        `;
        usersContainer.appendChild(userDiv);
    }
}

loadUsers();

//------------------------------------------------------------------
//-----------------------------quotes-------------------------------
//------------------------------------------------------------------

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kanye Quotes</title>
</head>
<body>
    <header>
        <h1>Fresh Quotes from Kanye Uncle</h1>

    </header>
    <main>
        <section>
            <blockquote id="quote">
            </blockquote>
            <button onclick="loadQuote()">Get a new Quote</button>
        </section>
    </main>
    <script src="js/quotes.js"></script>
</body>
</html>
*/

const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = quote => {
    const blockQuote = document.getElementById('quote');
    console.log(quote);
    blockQuote.innerText = quote.quote;
}

//------------------------------------------------------------------
//--------------------------------user------------------------------
//------------------------------------------------------------------

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Async Random User</title>
</head>
<body>
    <button onclick="loadUserFetch()">Load Fetch</button>
    <button onclick="loadUserAsync()">Load Async</button>
    <script src="js/user.js"></script>
</body>
</html>
*/

const loadUserFetch = () => {
    const url = `https://randomuser.me/api/?gender=female`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
        .catch(error => console.log(error))
}

const loadUserAsync = async () => {
    const url = `https://randomuser.me/api/?gender=female`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayUser(data.results[0]);
    }
    catch (error) {
        console.log(error);
    }

}


const displayUser = user => {
    console.log(user);
}

//---------------------------------------------------------------
//----------------------------meals------------------------------
//---------------------------------------------------------------

/*
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>I am Hungry</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
</head>
</head>

<body>
    <header>
        <h1 class="text-center text-warning">Exploring Food</h1>
    </header>
    <main>
        <!-- meal detail container -->
        <section>
            <h2>Meal Details</h2>
            <div id="detail-container" style="width: 25rem;">
                
            </div>
        </section>
        <!-- search field -->
        <section class="text-center">
            <input id="search-field" type="text" placeholder="search your food">
            <button onclick="searchFood()" class="btn btn-primary">Search</button>
        </section>
        <!-- search result -->
        <section class="container">
            <h2>My Meals</h2>
            <div id="meal-container" class="row row-cols-1 row-cols-md-3 g-4">

            </div>
        </section>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossorigin="anonymous"></script>
    <script src="js/meals.js"></script>
</body>

</html>
*/

const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        mealsContainer.appendChild(mealDiv);
    })
}

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadMeals(searchText);
    searchField.value = '';
}

const loadMealDetail = (idMeal) => {
    // console.log('get details of id', idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]));
}

const displayMealDetails = meal => {
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    detailContainer.appendChild(mealDiv);
}

loadMeals('');