/*
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
 	arrow1.classList.toggle('arrow-turn');
 	arrow1.style.transition = "all .3s";
 })

 ClickListener2.addEventListener('click', function(){
 	slides2.classList.toggle('hidden');
 	card2.classList.toggle('card-minimized');
 	arrow2.classList.toggle('arrow-turn');
 	arrow2.style.transition = "all .3s";
 })

 ClickListener3.addEventListener('click', function(){
 	slides3.classList.toggle('hidden');
 	card3.classList.toggle('card-minimized');
 	arrow3.classList.toggle('arrow-turn');
 	arrow3.style.transition = "all .3s";
 })
*/







// TIPS CARD

let tips = document.getElementsByClassName('tips')[0];
const clicked = document.getElementsByClassName('tips-content-container')[0];
let exit = document.getElementsByClassName('tips-icon')[0];
let expandedTips = document.getElementsByClassName('expanding-container')[0];



clicked.addEventListener('click', function(){
	expandedTips.classList.toggle('hidden');
	tips.classList.toggle('tips-minimized')
	exit.classList.toggle('tips-exit')
 	exit.style.transition = "all .9s";
 	
})




// CARD EXPANSION

let clickableTabs = document.getElementsByClassName('content-container');
let cards = document.getElementsByClassName('card');
let animationContainer = document.getElementsByClassName('animation-container');
let arrow = document.getElementsByClassName('arrow-down');
let swipe = document.getElementsByClassName('block');
let count = 1; // slide counter (used lower)

for (let i = 0; i < clickableTabs.length; i++) {
	clickableTabs[i].addEventListener('click', function() {
		// for(let i = 0; i < clickableTabs.length; i++) {
		// 	if (!clickableTabs[i].nextElementSibling.classList.contains('hidden')) {
		// 		clickableTabs[i].nextElementSibling.classList.toggle('hidden')
		// 	}
		// }
		count = 1;
		arrow[i].classList.toggle('arrow-turn')
		animationContainer[i].classList.toggle('hidden')
		cards[i].classList.toggle('card-minimized')
/*  		swipe[i].classList.add('slide') */
	})
};









// SLIDESHOW 

/*
let cardIndex = [1,1,1,1,1,1];
let cardId = ["slideshow-1", "slideshow-2", "slideshow-3", "slideshow-4", "slideshow-5", "slideshow-6"]
displayCard(1, 0);
displayCard(1, 1);
displayCard(1, 2);
displayCard(1, 3);
displayCard(1, 4);
displayCard(1, 5);

function otherCards(n, no) {
  displayCard(cardIndex[no] += n, no);
}

function displayCard(n, no) {
  let i;
  let x = document.getElementsByClassName(cardId[no]);
  if (n > x.length) {cardIndex[no] = 1}    
  if (n < 1) {cardIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[cardIndex[no]-1].style.display = "block";  
}
*/


















/*
arrowRight.addEventListener('click', function(){
	
	if (count == 4){
		alert('4');
		count = 1;
	}
	
	else if (count = 0){
		count = count+1;
	}
	
	else if (count = 1){
		count = count+1;
	}
	
	else if (count = 2){
		count = count+1;
	}
	
	
	
});
*/

const arrowNext = document.getElementsByClassName('arrow-next'); //all next arrows in an array
const arrowNextNumber = arrowNext.length; //length of the arrow next array
let slide1;
let slide2;
let slide3;
let slide4;
var siblings;
	

	for (let i = 0; i < arrowNextNumber; i++){
		arrowNext[i].addEventListener('click', function(){
			let parent = arrowNext[i].parentNode;
			siblings = parent.childNodes; //stores an array of all the sibling elements of the arrow
console.log(siblings)
		
		let length = siblings.length;
// 		alert(length);

				
		// [1 = arrow next, 3 = arrow back, 7 <-> 11 = images] (odd numbers)
		
		//images
	
/*
		slide1 = siblings[5];
 		console.log(siblings);
		slide2 = siblings[7];
		slide3 = siblings[9];
		slide4 = siblings[11];
		
*/
		if(length == 9){
			
			slide1 = siblings[5];
			slide2 = siblings[7];
			
			switch(count){
				case 1: {
					count = count + 1;
					slide1.classList.remove('slide2');
		 			slide1.classList.add('slide');
			 		slide2.classList.add('slide2');
			 		slide2.classList.remove('hidden-image');
			 		setTimeout(function(){slide1.classList.add('hidden-image')}, 1500);
			 		slide1.style.zIndex = '0';
				break};
				case 2: {
					count = 1;
					slide1.classList.remove('slide');
			 		slide2.classList.remove('slide2');
					slide2.classList.add('slide');
			 		slide1.classList.add('slide2');
			 		slide1.classList.remove('hidden-image');
			 		setTimeout(function(){slide2.classList.add('hidden-image')}, 1500);
			 		slide1.style.zIndex = '9';
				break};
			};
		}
		else if(length == 11){
			
			slide1 = siblings[5];
			slide2 = siblings[7];
			slide3 = siblings[9];
			
			switch(count){
				case 1: {
					count = count + 1;
					slide1.classList.remove('slide2');
		 			slide1.classList.add('slide');
			 		slide2.classList.add('slide2');
			 		slide2.classList.remove('hidden-image');
			 		setTimeout(function(){slide1.classList.add('hidden-image')}, 1500);
			 		slide1.style.zIndex = '0';
				break};
				case 2: {
					count = count + 1;
					slide1.classList.remove('slide');
			 		slide2.classList.remove('slide2');
					slide2.classList.add('slide');
			 		slide3.classList.add('slide2');
			 		slide3.classList.remove('hidden-image');
			 		slide1.classList.add('hidden-image');
			 		setTimeout(function(){slide2.classList.add('hidden-image')}, 1500);
				break};
				case 3: {
					count = 1;
					slide2.classList.remove('slide');
			 		slide3.classList.remove('slide2');
					slide3.classList.add('slide');
			 		slide1.classList.add('slide2');
			 		slide1.classList.remove('hidden-image');
			 		slide2.classList.add('hidden-image');
			 		setTimeout(function(){slide3.classList.add('hidden-image')}, 1500);
			 		slide1.style.zIndex = '9';
				break};
			};
		}
		else if(length == 13){
			
			slide1 = siblings[5];
			slide2 = siblings[7];
			slide3 = siblings[9];
			slide4 = siblings[11];
			
			switch(count){
			case 1: {
				count = count + 1;
				slide4.classList.remove('slide');
				slide1.classList.remove('slide2');
	 			slide1.classList.add('slide');
		 		slide2.classList.add('slide2');
		 		slide2.classList.remove('hidden-image');
		 		slide4.classList.add('hidden-image');
		 		setTimeout(function(){slide1.classList.add('hidden-image')}, 1500);
		 		slide1.style.zIndex = '0';
			break};
			case 2: {
				count = count + 1;
				slide1.classList.remove('slide');
		 		slide2.classList.remove('slide2');
				slide2.classList.add('slide');
		 		slide3.classList.add('slide2');
		 		slide3.classList.remove('hidden-image');
		 		slide1.classList.add('hidden-image');
		 		setTimeout(function(){slide2.classList.add('hidden-image')}, 1500);
			break};
			case 3: {
				count = count + 1;
				slide2.classList.remove('slide');
		 		slide3.classList.remove('slide2');
				slide3.classList.add('slide');
		 		slide4.classList.add('slide2');
		 		slide4.classList.remove('hidden-image');
		 		slide2.classList.add('hidden-image');
		 		setTimeout(function(){slide3.classList.add('hidden-image')}, 1500);
		 		//slide3.classList.add('hidden-image');
			break};
			case 4: {
				count = 1;
				slide3.classList.remove('slide');
		 		slide4.classList.remove('slide2');
				slide4.classList.add('slide');
		 		slide1.classList.add('slide2');
		 		slide1.classList.remove('hidden-image');
		 		slide3.classList.add('hidden-image');
		 		setTimeout(function(){slide4.classList.add('hidden-image')}, 1500);
		 		//slide4.classList.add('hidden-image');
		 		slide1.style.zIndex = '9';
			break};
		    };
		};
	});
};













