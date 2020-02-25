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

let recipe = document.getElementsByClassName('recipe')[0];


let classesToHide = ['wrap-hidden', 'icon-highlight-off'];
let highlights = ['recipes-highlight', 'guide-highlight', 'list-highlight'];

let favsButton = document.getElementById('favorites-button');
let favsWrap = document.getElementById('favorites-wrap');



const recipesOpen = document.getElementsByClassName('recipe');
const flexContainerRecipes = document.getElementById('flex-container-recipes')
const backToRecipesFromRecipeBtns = document.getElementsByClassName('back-to-recipes-btn');
let favoritesBackToRecipesBtn = document.getElementById('favorites-back-to-recipes-btn');
let favoritesRecipeCards = favoritesPageContainer.getElementsByClassName('recipe-card');
let recipeCards = flexContainerRecipes.getElementsByClassName('recipe-card');

recipes.addEventListener('click', function(){
	guideWrap.classList.add('wrap-hidden');
	listWrap.classList.add('wrap-hidden');
	recipesWrap.classList.remove('wrap-hidden');
	favsWrap.classList.add('wrap-hidden');
	hRecipes.classList.add('icon-highlight-active');
	iRecipes.classList.add('navicon-active');
	hGuide.classList.remove('icon-highlight-active');
	hGuide.classList.add('icon-highlight-off');
	iGuide.classList.remove('navicon-active');
	iGuide.classList.add('navicon-guide');
	hList.classList.remove('icon-highlight-active'); 
	iList.classList.remove('navicon-active');
	
	favsButton.addEventListener('click', function(){
		favsWrap.classList.remove('wrap-hidden');
		recipesWrap.classList.add('wrap-hidden');
		closeAllOpenRecipes()
	});

	favoritesBackToRecipesBtn.addEventListener('click', function(){
		closeAllOpenRecipes();
		favsWrap.classList.add('wrap-hidden')
		recipesWrap.classList.remove('wrap-hidden');
		flexContainerRecipes.classList.remove('wrap-hidden');
	})

	// backToRecipesBtn.addEventListener('click', function() {
	// 	favsWrap.classList.add('wrap-hidden');
	// 	recipesWrap.classList.remove('wrap-hidden');
	// })

});


function recipeCardsListeners() {
	// recipeCards = document.getElementsByClassName('recipe-card');
    for (let i = 0; i < recipeCards.length; i++) {
        recipeCards[i].addEventListener('click', () => {
			// exclude hearts from opening the recipe
            let noClick = '.fa-heart';
                if (!event.target.matches(noClick)) {
                    // recipeCards = document.getElementsByClassName('recipe-card');
					console.log('clicked recipe card')
					let id = recipeCards[i].dataset.id;
					// if (id) {
					// .querySelector(`[data-id='${id}']`);
					let openRecipe = document.getElementById(`${id}`);
					openRecipe.classList.remove('wrap-hidden');
					flexContainerRecipes.classList.add('wrap-hidden')
				// }
                }
        })
	}
    for (let i = 0; i < backToRecipesFromRecipeBtns.length; i++) {
        backToRecipesFromRecipeBtns[i].addEventListener('click', function() {
            let buttonParent = backToRecipesFromRecipeBtns[i].parentElement;
            buttonParent.classList.add('wrap-hidden')
            flexContainerRecipes.classList.remove('wrap-hidden');
        })
        
    }

}

recipeCardsListeners()


function favoritesRecipeCardsListeners() {
	for (let i = 0; i < favoritesRecipeCards.length; i++) {
		favoritesRecipeCards[i].addEventListener('click', () => {
			// exclude hearts from opening the recipe
            let noClick = '.fa-heart';
                if (!event.target.matches(noClick)) {
                    // recipeCards = document.getElementsByClassName('recipe-card');
					console.log('clicked recipe card')
					let id = favoritesRecipeCards[i].dataset.id;
					let openRecipe = document.getElementById(`${id}`);
					console.log(openRecipe)
					openRecipe.classList.remove('wrap-hidden');
				}
		})
}
}

favoritesRecipeCardsListeners()

function closeAllOpenRecipes() {
    for (let i = 0; i < recipesOpen.length; i++) {
        if (!recipesOpen[i].classList.contains('wrap-hidden'))
        recipesOpen[i].classList.add('wrap-hidden')
    }
}

guide.addEventListener('click', function(){
	guideWrap.classList.remove('wrap-hidden');
	listWrap.classList.add('wrap-hidden');
	recipesWrap.classList.add('wrap-hidden');
	favsWrap.classList.add('wrap-hidden');
	hRecipes.classList.remove('icon-highlight-active');
	iRecipes.classList.remove('navicon-active');
	hGuide.classList.remove('icon-highlight-off');
	hGuide.classList.add('icon-highlight-active');
	iGuide.classList.add('navicon-active');
	hList.classList.remove('icon-highlight-active'); 
	iList.classList.remove('navicon-active');
});

list.addEventListener('click', function(){
	guideWrap.classList.add('wrap-hidden');
	listWrap.classList.remove('wrap-hidden');
	recipesWrap.classList.add('wrap-hidden');
	favsWrap.classList.add('wrap-hidden');
	hRecipes.classList.remove('icon-highlight-active');
	iRecipes.classList.remove('navicon-active');
	hGuide.classList.remove('icon-highlight-active');
	hGuide.classList.add('icon-highlight-off');
	iGuide.classList.remove('navicon-active');
	iGuide.classList.add('navicon-guide');
	hList.classList.add('icon-highlight-active'); 
	iList.classList.add('navicon-active');
});




// doesnt do anything

// favsButton.addEventListener('click', function(){
// 	favsWrap.classList.add('wrap-hidden');
// });
