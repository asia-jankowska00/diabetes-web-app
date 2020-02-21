let recipes = document.getElementById('recipes');
let guide = document.getElementById('shoppingGuide');
let list = document.getElementById('shoppingList');

let recipesWrap = document.getElementById('recipes-wrap');
let guideWrap = document.getElementById('shopping-guide-wrap');
let listWrap = document.getElementById('shopping-list-wrap');

let hRecipes = document.getElementById('recipes-highlight');
let hGuide = document.getElementById('guide-highlight');
let hList = document.getElementById('list-highlight');

let iRecipes = document.getElementById('icon-recipes');
let iGuide = document.getElementById('icon-guide');
let iList = document.getElementById('icon-list');


let classesToHide = ['wrap-hidden', 'icon-highlight-off'];
let highlights = ['recipes-highlight', 'guide-highlight', 'list-highlight'];



recipes.addEventListener('click', function(){
	guideWrap.classList.add('wrap-hidden');
	listWrap.classList.remove('wrap-hidden');
	recipesWrap.classList.toggle('wrap-hidden');
	hRecipes.classList.add('icon-highlight-active');
	iRecipes.classList.add('navicon-active');
	hGuide.classList.remove('icon-highlight-active');
	iGuide.classList.remove('navicon-active');
	iGuide.classList.add('navicon');
	hList.classList.remove('icon-highlight-active'); 
	iList.classList.remove('navicon-active');
});

guide.addEventListener('click', function(){
	guideWrap.classList.remove('wrap-hidden');
	listWrap.classList.add('wrap-hidden');
	recipesWrap.classList.add('wrap-hidden');
	hRecipes.classList.remove('icon-highlight-active');
	iRecipes.classList.remove('navicon-active');
	hGuide.classList.add('icon-highlight-active');
	iGuide.classList.add('navicon-active');
	hList.classList.remove('icon-highlight-active'); 
	iList.classList.remove('navicon-active');
});

list.addEventListener('click', function(){
	guideWrap.classList.add('wrap-hidden');
	listWrap.classList.add('wrap-hidden');
	recipesWrap.classList.remove('wrap-hidden');
	hRecipes.classList.remove('icon-highlight-active');
	iRecipes.classList.remove('navicon-active');
	hGuide.classList.remove('icon-highlight-active');
	iGuide.classList.remove('navicon-active');
	iGuide.classList.add('navicon');
	hList.classList.add('icon-highlight-active'); 
	iList.classList.add('navicon-active');
});