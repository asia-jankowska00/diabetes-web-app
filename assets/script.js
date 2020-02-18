const loadScreen = document.getElementById('load-screen')

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    setTimeout(function () {
	loadScreen.classList.add('hidden');
	    }, 3000)
    
});