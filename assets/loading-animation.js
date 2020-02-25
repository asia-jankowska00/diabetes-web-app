const loadScreen = document.getElementById('load-screen')

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    // setTimeout(function () {
	loadScreen.classList.add('hidden');
	    // }, 3000)
});



// on page laod, save 'pageLoadedBefore' to localstorage
window.addEventListener('load', () => {
    if(localStorage.getItem('pageLoadedBefore') === null) {
        // run tutorial
        localStorage.setItem('pageLoadedBefore', 'true')
    }
});


//tutorial tooltips
function runTutorial() {
    let tuorialSlide1, tutorialSlide2, tutorialSlide3
    // if tutorialSlide1.cross clicked, close this and display tutorialSlide2
}
// get pageLoadedBefore from locaStorage
// if it doesnt exist, perform tutorial
