

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
const arrowBack = document.getElementsByClassName('arrow-back'); //all back arrows in an array
const arrowBackNumber = arrowBack.length;
let slide1;
let slide2;
let slide3;
let slide4;
var siblings;
let timeout = true;

function delay(){
	timeout = true;
}




for (let i = 0; i < arrowNextNumber; i++){
	arrowNext[i].addEventListener('click', function(){
		let parent = arrowNext[i].parentNode;
		siblings = parent.childNodes; //stores an array of all the sibling elements of the arrow
		
		console.log(timeout)
			
		let length = siblings.length;
		// 	alert(length);

				
		// [1 = arrow next, 3 = arrow back, 7 <-> 11 = images] (odd numbers)
		
		//images
	
/*
		slide1 = siblings[5];
 		console.log(siblings);
		slide2 = siblings[7];
		slide3 = siblings[9];
		slide4 = siblings[11];	
*/	

		switch(timeout){
			case true: {
				
				timeout = false;
				
				setTimeout(delay, 800);
				
				if(length == 9){
					
					slide1 = siblings[5];
					slide2 = siblings[7];
					
					switch(count){
						case 1: {
							count = count + 1;
							slide2.classList.remove('slide-reverse2'); //next
							slide1.classList.remove('slide-reverse'); //current
							slide1.classList.remove('slide2');
				 			slide1.classList.add('slide');
					 		slide2.classList.add('slide2');
					 		slide2.classList.remove('hidden-image');
					 		setTimeout(function(){slide1.classList.add('hidden-image')}, 800);
					 		slide1.style.zIndex = '0';
						break};
						case 2: {
							count = 1;
							slide1.classList.remove('slide-reverse2'); //next
							slide2.classList.remove('slide-reverse'); //current
							slide1.classList.remove('slide');
					 		slide2.classList.remove('slide2');
							slide2.classList.add('slide');
					 		slide1.classList.add('slide2');
					 		slide1.classList.remove('hidden-image');
					 		setTimeout(function(){slide2.classList.add('hidden-image')}, 800);
					 		slide1.style.zIndex = '1';
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
							slide2.classList.remove('slide-reverse2'); //next
							slide1.classList.remove('slide-reverse'); //current
							slide1.classList.remove('slide2');
				 			slide1.classList.add('slide');
					 		slide2.classList.add('slide2');
					 		slide2.classList.remove('hidden-image');
					 		setTimeout(function(){slide1.classList.add('hidden-image')}, 800);
					 		slide1.style.zIndex = '0';
						break};
						case 2: {
							count = count + 1;
							slide3.classList.remove('slide-reverse2'); //next
							slide2.classList.remove('slide-reverse'); //current
							slide1.classList.remove('slide');
					 		slide2.classList.remove('slide2');
							slide2.classList.add('slide');
					 		slide3.classList.add('slide2');
					 		slide3.classList.remove('hidden-image');
					 		slide1.classList.add('hidden-image');
					 		setTimeout(function(){slide2.classList.add('hidden-image')}, 800);
						break};
						case 3: {
							count = 1;
							slide1.classList.remove('slide-reverse2'); //next
							slide3.classList.remove('slide-reverse'); //current
							slide2.classList.remove('slide');
					 		slide3.classList.remove('slide2');
							slide3.classList.add('slide');
					 		slide1.classList.add('slide2');
					 		slide1.classList.remove('hidden-image');
					 		slide2.classList.add('hidden-image');
					 		setTimeout(function(){slide3.classList.add('hidden-image')}, 800);
					 		slide1.style.zIndex = '1';
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
							count = 2;
							slide2.classList.remove('slide-reverse2');
							slide1.classList.remove('slide-reverse');
							slide4.classList.remove('slide');
							slide1.classList.remove('slide2');
				 			slide1.classList.add('slide');
					 		slide2.classList.add('slide2');
					 		slide2.classList.remove('hidden-image');
					 		setTimeout(function(){slide1.classList.add('hidden-image')}, 800);
					 		slide1.style.zIndex = '0';
						break};
						case 2: {
							count = 3;
							slide3.classList.remove('slide-reverse2');
							slide2.classList.remove('slide-reverse');
							slide1.classList.remove('slide');
					 		slide2.classList.remove('slide2');
							slide2.classList.add('slide');
					 		slide3.classList.add('slide2');
					 		slide3.classList.remove('hidden-image');
					 		setTimeout(function(){slide2.classList.add('hidden-image')}, 800);
						break};
						case 3: {
							count = 4;
							slide4.classList.remove('slide-reverse2');
							slide3.classList.remove('slide-reverse');
							slide2.classList.remove('slide');
					 		slide3.classList.remove('slide2');
							slide3.classList.add('slide');
					 		slide4.classList.add('slide2');
					 		slide4.classList.remove('hidden-image');
					 		setTimeout(function(){slide3.classList.add('hidden-image')}, 800);
					 		//slide3.classList.add('hidden-image');
						break};
						case 4: {
							count = 1;
							slide1.classList.remove('slide-reverse2');
							slide4.classList.remove('slide-reverse');
							slide3.classList.remove('slide');
					 		slide4.classList.remove('slide2');
							slide4.classList.add('slide');
					 		slide1.classList.add('slide2');
					 		slide1.classList.remove('hidden-image');
					 		setTimeout(function(){slide4.classList.add('hidden-image')}, 800);
					 		//slide4.classList.add('hidden-image');
					 		slide1.style.zIndex = '1';
						break};
				    };
				};
			break};
		
			case false: {
	
			break};
		};
	});
};





















for (let i = 0; i < arrowBackNumber; i++){
	arrowBack[i].addEventListener('click', function(){
	let parent = arrowBack[i].parentNode;
	siblings = parent.childNodes; //stores an array of all the sibling elements of the arrow
	
	console.log(siblings)
	console.log(parent)
		
	let length = siblings.length;
// 	alert(length);

				
		// [1 = arrow next, 3 = arrow back, 7 <-> 11 = images] (odd numbers)
		
		//images
	
/*
		slide1 = siblings[5];
 		console.log(siblings);
		slide2 = siblings[7];
		slide3 = siblings[9];
		slide4 = siblings[11];
		
*/
		
		switch(timeout){
			case true: {
				
				timeout = false;
				
				setTimeout(delay, 800);
		
				if(length == 9){
					
					slide1 = siblings[5];
					slide2 = siblings[7];
					
					switch(count){
						case 1: {
							count = 2;
							slide2.classList.remove('slide'); //next
					 		slide1.classList.remove('slide2'); //current
							slide2.classList.remove('slide-reverse2'); //previous
							slide1.classList.remove('slide-reverse'); //current
							slide1.classList.add('slide-reverse2'); //current
				 			slide2.classList.add('slide-reverse'); //next
				 			slide2.classList.remove('hidden-image'); //next
				 			setTimeout(function(){slide1.classList.add('hidden-image')}, 800); //current
				 			slide1.style.zIndex = '1'; //current
						break};
						case 2: {
							count = 1;
							slide1.classList.remove('slide'); //next
					 		slide2.classList.remove('slide2'); //current
							slide1.classList.remove('slide-reverse2'); //previous
					 		slide2.classList.remove('slide-reverse'); //current
							slide2.classList.add('slide-reverse2'); //current
					 		slide1.classList.add('slide-reverse'); //next
					 		slide1.classList.remove('hidden-image'); //next
					 		setTimeout(function(){slide2.classList.add('hidden-image')}, 800); //current
					 		//slide4.classList.add('hidden-image');
					 		slide1.style.zIndex = '0'; //previous
						break};
					};
				}
				else if(length == 11){
					
					slide1 = siblings[5];
					slide2 = siblings[7];
					slide3 = siblings[9];
					
					switch(count){
						case 1: {
							count = 3;
							slide3.classList.remove('slide'); //next
					 		slide1.classList.remove('slide2'); //current
							slide2.classList.remove('slide-reverse2'); //previous
							slide1.classList.remove('slide-reverse'); //current
							slide1.classList.add('slide-reverse2'); //current
				 			slide3.classList.add('slide-reverse'); //next
				 			slide3.classList.remove('hidden-image'); //next
				 			setTimeout(function(){slide1.classList.add('hidden-image')}, 800); //current
				 			slide1.style.zIndex = '1'; //current
						break};
						case 2: {
							count = 1;
							slide1.classList.remove('slide'); //next
					 		slide2.classList.remove('slide2'); //current
							slide3.classList.remove('slide-reverse2'); //previous
							slide2.classList.remove('slide-reverse'); //current
				 			slide2.classList.add('slide-reverse2'); //current
					 		slide1.classList.add('slide-reverse'); //next
					 		slide1.classList.remove('hidden-image'); //next
					 		setTimeout(function(){slide2.classList.add('hidden-image')}, 800); //current
						break};
						case 3: {
							count = 2;
							slide2.classList.remove('slide'); //next
					 		slide3.classList.remove('slide2'); //current
							slide1.classList.remove('slide-reverse2'); //previous
					 		slide3.classList.remove('slide-reverse'); //current
							slide3.classList.add('slide-reverse2'); //current
					 		slide2.classList.add('slide-reverse'); //next
					 		slide2.classList.remove('hidden-image'); //next
					 		setTimeout(function(){slide3.classList.add('hidden-image')}, 800); //current
					 		slide1.style.zIndex = '0'; //previous
						break};
					};
				}
				else if(length == 13){
		
					
					slide1 = siblings[5];
					slide2 = siblings[7];
					slide3 = siblings[9];
					slide4 = siblings[11];
					
					console.log(siblings);
					
					switch(count){
						case 1: {
							count = 4;
							slide4.classList.remove('slide'); //next
					 		slide1.classList.remove('slide2'); //current
							slide2.classList.remove('slide-reverse2'); //previous
							slide1.classList.remove('slide-reverse'); //current
				 			slide1.classList.add('slide-reverse2'); //current
					 		slide4.classList.add('slide-reverse'); //next
					 		slide4.classList.remove('hidden-image'); //next
					 		setTimeout(function(){slide1.classList.add('hidden-image')}, 800); //current
					 		slide1.style.zIndex = '1'; //current
						break};
						case 2: {
							count = 1;
							slide1.classList.remove('slide');
					 		slide2.classList.remove('slide2');
							slide3.classList.remove('slide-reverse2');
					 		slide2.classList.remove('slide-reverse');
							slide2.classList.add('slide-reverse2');
					 		slide1.classList.add('slide-reverse');
					 		slide1.classList.remove('hidden-image');
					 		setTimeout(function(){slide2.classList.add('hidden-image')}, 800);
						break};
						case 3: {
							count = 2;
							slide2.classList.remove('slide');
					 		slide3.classList.remove('slide2');
							slide4.classList.remove('slide-reverse2');
					 		slide3.classList.remove('slide-reverse');
							slide3.classList.add('slide-reverse2');
					 		slide2.classList.add('slide-reverse');
					 		slide2.classList.remove('hidden-image');
					 		setTimeout(function(){slide3.classList.add('hidden-image')}, 800);
					 		//slide3.classList.add('hidden-image');
						break};
						case 4: {
							count = 3;
							slide3.classList.remove('slide'); //next
					 		slide4.classList.remove('slide2'); //current
							slide1.classList.remove('slide-reverse2'); //previous
					 		slide4.classList.remove('slide-reverse'); //current
							slide4.classList.add('slide-reverse2'); //current
					 		slide3.classList.add('slide-reverse'); //next
					 		slide3.classList.remove('hidden-image'); //next
					 		setTimeout(function(){slide4.classList.add('hidden-image')}, 800); //current
					 		//slide4.classList.add('hidden-image');
					 		slide1.style.zIndex = '0'; //previous
						break};
			    	};
				}; 
			break};
	
			case false: {

			break};					
		};			
	});
};
















