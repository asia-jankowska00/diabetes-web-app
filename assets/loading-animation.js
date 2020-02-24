const loadScreen = document.getElementById('load-screen')

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    // setTimeout(function () {
	loadScreen.classList.add('hidden');
	    // }, 3000)
});




// on page laod, save 'pageLoadedBefore' to localstorage

//tutorial tooltips

// get pageLoadedBefore from locaStorage
// if it doesnt exist, perform tutorial
