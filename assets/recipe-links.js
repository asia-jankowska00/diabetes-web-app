// // get all recipe data-id's
// // get recipe cards with id's

// //click listener
// // if this.data=id = recipe1 then get recipe with id recipe1

// let recipeCards = document.getElementsByClassName('recipe-card');
// const recipesOpen = document.getElementsByClassName('recipe');
// const flexContainerRecipes = document.getElementById('flex-container-recipes')
// const backToRecipesFromRecipeBtns = document.getElementsByClassName('back-to-recipes-btn');



// function recipeCardsListeners() {
//     for (let i = 0; i < recipeCards.length; i++) {
//         recipeCards[i].addEventListener('click', () => {
//             // exclude hearts from opening the recipe
//             let noClick = '.fa-heart';
//                 if (!event.target.matches(noClick)) {
//                     recipeCards = document.getElementsByClassName('recipe-card');
//                     console.log('clicked recipe card')
//                     let id = recipeCards[i].dataset.id;
//                     // .querySelector(`[data-id='${id}']`);
//                     let openRecipe = document.getElementById(`${id}`);
//                     openRecipe.classList.remove('wrap-hidden');
//                     flexContainerRecipes.classList.add('wrap-hidden');
//                 }
//         })
//     }
//     for (let i = 0; i < backToRecipesFromRecipeBtns.length; i++) {
//         backToRecipesFromRecipeBtns[i].addEventListener('click', function() {
//             let buttonParent = backToRecipesFromRecipeBtns[i].parentElement;
//             buttonParent.classList.add('wrap-hidden')
//             flexContainerRecipes.classList.remove('wrap-hidden');
//         })
        
//     }

// }

// function closeAllOpenRecipes() {
//     for (let i = 0; i < recipesOpen.length; i++) {
//         if (!recipesOpen[i].classList.contains('wrap-hidden'))
//         recipesOpen[i].classList.add('wrap-hidden')
//     }
// }

// recipeCardsListeners()

// function favoritesRecipeCardsListeners() {

// }
