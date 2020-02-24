// add data-favorite attribute to html heart icon with value of true/false

// add heart click event
// check value of data-favorite / classlist.contains 'heart-favorited'
// if false, get the whole recipe div (innerhtml) and put it into favs page, and change value to true
// if true, remove recipe div from favs and change value to false

const hearts = document.getElementsByClassName('far');

function addEventListeners()  {
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].addEventListener('click', function() {
            if (hearts[i].dataset.favorite === 'false') {
                hearts[i].dataset.favorite = 'true';
                console.log('data-favorite set to true');
            }
            else {
                hearts[i].dataset.favorite = 'false';
                console.log('data-favorite set to false');
            }
        })
    }
}

function setFavorites() {
    // loop through recipes
    // get data-favorite for [i] recipe
    // set data-favorite for [i] recipe
    // getparent
}

function saveFavoriteData() {
    // loop through recipes
    // get [i] recipe's dataset
    // save it to localstorage
}

addEventListeners()

function onLoad() {
    // run addEventListeners
    // run setFavorites
}

