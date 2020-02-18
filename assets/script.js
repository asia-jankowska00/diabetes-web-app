// function downLoad(){
//     if (document.all){
//         document.all["load-screen"].style.visibility="hidden";
//         document.all["after-load"].style.visibility="visible";
//     } else if (document.getElementById){
//         node = document.getElementById("load-screen").style.visibility='hidden';
//         node = document.getElementById("after-load").style.visibility='visible';
//     }
// }
const loadScreen = document.getElementById('load-screen')


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    setTimeout(function(){ loadScreen.classList.add('hidden'); }, 3000);
    
});