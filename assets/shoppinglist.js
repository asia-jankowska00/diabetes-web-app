let shoppingList = {
    selectElements: function() {
        // select elements from shopping list page
       this.inputItemField = document.getElementById('input-item-field');
       this.addItemBtn = document.getElementById('add-item-btn');
       this.clearListBtn = document.getElementById('clear-list-btn');
       this.shoppingListList = document.getElementById('shopping-list-list');
       this.shoppingListListChildren = this.shoppingListList.children;
    },
    createItem: function() {
        // create li element with attributes, value, checkbox, and delete button
        let shoppingListItem, shoppingListItemCheckbox, shoppingListItemValue, shoppingListItemDeleteBtn;
        // li
        shoppingListItem = document.createElement('li');
        shoppingListItem.setAttribute('class', 'shopping-list-item');
        // checkbox
        shoppingListItemCheckbox = document.createElement('input');
        shoppingListItemCheckbox.setAttribute('type', 'checkbox');
        // text  value
        if (!(this.inputItemField.value === "")){
            shoppingListItemValue = document.createTextNode(this.inputItemField.value);
        };

        // delete button
        shoppingListItemDeleteBtn = document.createElement('i');
        shoppingListItemDeleteBtn.setAttribute('class', 'fas fa-times');
        // add delete functionality to button
        shoppingListItemDeleteBtn.addEventListener('click', () => {
            parent = shoppingListItemDeleteBtn.parentNode;
            parent.remove();
            console.log('deleted item')
        })
        // append elements to list item
        shoppingListItem.appendChild(shoppingListItemCheckbox);
        shoppingListItem.appendChild(shoppingListItemValue);
        shoppingListItem.appendChild(shoppingListItemDeleteBtn);
        // append item to shopping list
        this.shoppingListList.appendChild(shoppingListItem);

        console.log('created item')
    },
    addButtonEventListeners: function() {
        // add click event listener to add item button
        this.addItemBtn.addEventListener('click', function() {
            this.createItem();
            this.saveList();
        }.bind(shoppingList));
        
        this.clearListBtn.addEventListener('click', function() {
            this.clearList();
            this.saveList();
        }.bind(shoppingList));
    },
    clearList: function() {
        this.shoppingListList.innerHTML = "";
        console.log('cleared list')
    },
    saveList: function() {
        // get innerHTML of ul
        shoppingListListinnerHTML = this.shoppingListList.innerHTML;
        console.log(shoppingListListinnerHTML);
        // save to localStorage
        localStorage.setItem('shoppingListListinnerHTML', shoppingListListinnerHTML);
    },
    loopDeleteButtons: function() {
        let shoppingListItemDeleteBtns = this.shoppingListList.getElementsByClassName('fa-times');
        for (let i = 0; i < shoppingListItemDeleteBtns.length; i++) {
            shoppingListItemDeleteBtns[i].addEventListener('click', () =>  {
                // console.log(shoppingListItemDeleteBtns[i])
                parent = shoppingListItemDeleteBtns[i].parentNode;
                parent.remove();
                console.log('deleted item')
                this.saveList();
            })
        }
    },
}

function init() {
    shoppingList.selectElements()
    //check localStorage if savedList is present
    // if yes, put it in ul element in html
    if (localStorage.getItem('shoppingListListinnerHTML')) {
        shoppingList.shoppingListList.innerHTML = localStorage.getItem('shoppingListListinnerHTML');
        console.log(shoppingList.shoppingListList.innerHTML);
        shoppingList.saveList();
        shoppingList.loopDeleteButtons();
    };
    shoppingList.addButtonEventListeners();

}

init()