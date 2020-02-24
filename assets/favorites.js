// add data-favorite attribute to html heart icon with value of true/false

// add heart click event
// check value of data-favorite / classlist.contains 'heart-favorited'
// if false, get the whole recipe div (innerhtml) and put it into favs page, and change value to true
// if true, remove recipe div from favs and change value to false

const hearts = document.getElementsByClassName('favorites-heart');
const recipesNumber = hearts.length;
const favoritesPageContainer = document.getElementById('favorites-page-container');
const favoritesPageHearts = favoritesPageContainer.getElementsByClassName('favorites-heart');


function addEventListeners()  {
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].addEventListener('click', function() {
            if (hearts[i].dataset.favorite === 'false') {
                hearts[i].dataset.favorite = 'true';
                console.log('data-favorite set to true');
                setRedHeart(i)
                addToFavorites(i)
                saveFavoriteData()
            }
            else {
                hearts[i].dataset.favorite = 'false';
                console.log('data-favorite set to false');
                setOutlineHeart(i)
                removeFromFavorites(i)
                saveFavoriteData()
            }
        })
    }
}

function setFavorites() {
    for (let i = 0; i < hearts.length; i++) {
        // get parent's id
        let id = hearts[i].parentElement.getAttribute('data-id');
        // get corresponding data from localstorage
        let data = localStorage.getItem(id);
        console.log(data)
        // set heart's favorite attr
        hearts[i].setAttribute('data-favorite', data);
        console.log('set data attr to ' + hearts[i].dataset.favorite)
        colorHearts(i)
        // if (hearts[i].dataset.favorite === 'true') {
            // addToFavorites(i);

        // }
    }
}

function renderFavoritesPage() {
    for (let i = 0; i < recipesNumber; i++) {
        if (hearts[i].dataset.favorite === 'true') {
            addToFavorites(i);
        }
    }
}

function colorHearts(i) {
    // for (let i = 0; i < hearts.length; i++) {
        if (hearts[i].dataset.favorite === 'true') {
            // console.log(hearts[i].dataset.favorite)
            setRedHeart(i);
            console.log('set red heart');
        }
        else {
            // console.log(hearts[i].dataset.favorite)
            setOutlineHeart(i);
            console.log('set outline heart');
        }
    // }
}

function saveFavoriteData() {
    for (let i = 0; i < hearts.length; i++) {
            if (hearts[i].dataset.favorite === 'false') {
                let data = hearts[i].parentElement.getAttribute('data-id');
                localStorage.setItem(data, 'false');
            }
            else {
                let data = hearts[i].parentElement.getAttribute('data-id');
                localStorage.setItem(data, 'true');
            }
        }
}

function setRedHeart(i) {
    console.log(hearts[i]);
    hearts[i].classList.remove('far');
    hearts[i].classList.add('fas');
    hearts[i].style.color = "red";
}

function setOutlineHeart(i) {
    console.log(hearts[i]);
    hearts[i].classList.remove('fas');
    hearts[i].classList.add('far');
    hearts[i].style.color = "black";
}

function addToFavorites(i) {
    // get id from data
    let id = hearts[i].parentElement.getAttribute('data-id');
    // save id div's inner html to variable
    let innerHTML = hearts[i].parentElement.innerHTML;
    // console.log(innerHTML)
    let textNode = document.createTextNode(innerHTML);
    // create div with data-id
    let recipeDiv = document.createElement('div');
    recipeDiv.setAttribute('data-id', id);
    recipeDiv.setAttribute('class', 'recipe-card');
    // insert innerHTML from variable
    recipeDiv.innerHTML = textNode.textContent;
    // recipeDiv
    console.log(recipeDiv)
    // appendchild to <div class="flex-container-recipes">
    favoritesPageContainer.appendChild(recipeDiv)
}

function removeFromFavorites(i) {
    let id = hearts[i].parentElement.getAttribute('data-id');
    let recipe = favoritesPageContainer.querySelector(`[data-id='${id}']`);
    recipe.remove();
}

function onLoad() {
    addEventListeners();
    setFavorites();
    renderFavoritesPage();
}

onLoad()