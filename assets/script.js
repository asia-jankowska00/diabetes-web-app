const loadScreen = document.getElementById('load-screen')

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    loadScreen.classList.add('hidden');
});