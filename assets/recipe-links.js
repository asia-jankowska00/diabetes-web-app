// get all recipe data-id's
// get recipe cards with id's

//click listener
// if this.data=id = recipe1 then get recipe with id recipe1

let recipeCards = document.getElementsByClassName('recipe-card');
const flexContainerRecipes = document.getElementById('flex-container-recipes')
const backToRecipesFromRecipeBtns = document.getElementsByClassName('back-to-recipes-from-recipe-btn');

function recipeCardsListeners() {
    for (let i = 0; i < recipeCards.length; i++) {
        recipeCards[i].addEventListener('click', () => {
            console.log('clicked recipe card')
            let id = recipeCards[i].dataset.id;
            // .querySelector(`[data-id='${id}']`);
            let openRecipe = document.getElementById(`${id}`);
            openRecipe.classList.remove('wrap-hidden');
            flexContainerRecipes.classList.add('wrap-hidden');
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

}
