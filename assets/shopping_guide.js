const ClickListener1 = document.getElementById('ClickListener-1');
const ClickListener2 = document.getElementById('ClickListener-2');
const ClickListener3 = document.getElementById('ClickListener-3');
const slides1 = document.getElementById('slides-1');
const slides2 = document.getElementById('slides-2');
const slides3 = document.getElementById('slides-3');
const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');
const card3 = document.getElementById('card-3');
const arrow1 = document.getElementById('arrow-1');
const arrow2 = document.getElementById('arrow-2');
const arrow3 = document.getElementById('arrow-3');

ClickListener1.addEventListener('click', function(){
	slides1.classList.toggle('hidden');
	card1.classList.toggle('card-minimized');
	card1.style.transition = "all .5s ease-in-out";
	arrow1.classList.toggle('arrow-turn');
	arrow1.style.transition = "all .3s";
})

ClickListener2.addEventListener('click', function(){
	slides2.classList.toggle('hidden');
	slides2.style.transition = "all .5s ease-in-out";
	card2.classList.toggle('card-minimized');
	card2.style.transition = "all .5s ease-in-out";
	arrow2.classList.toggle('arrow-turn');
	arrow2.style.transition = "all .3s";
})

ClickListener3.addEventListener('click', function(){
	slides3.classList.toggle('hidden');
	slides3.style.transition = "all .5s ease-in-out";
	card3.classList.toggle('card-minimized');
	card3.style.transition = "all .5s ease-in-out";
	arrow3.classList.toggle('arrow-turn');
	arrow3.style.transition = "all .3s";
})