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
        shoppingListItemValue = document.createTextNode(this.inputItemField.value);
        // delete button
        shoppingListItemDeleteBtn = document.createElement('i');
        shoppingListItemDeleteBtn.setAttribute('class', 'fas fa-times');
        shoppingListItemDeleteBtn.addEventListener('click', () => {
        })
        // append elements to list item
        shoppingListItem.appendChild(shoppingListItemCheckbox);
        shoppingListItem.appendChild(shoppingListItemValue);
        shoppingListItem.appendChild(shoppingListItemDeleteBtn);
        // append item to shopping list
        this.shoppingListList.appendChild(shoppingListItem);
    },
    addButtonEvent: function() {
        // add click event listener to add item button
        this.addItemBtn.addEventListener('click', function() {
            this.createItem();
        }.bind(shoppingList));
    },
    scanList: function() {
        let checkbox, listItem, deleteButton;
        for (let i = 0; i < this.shoppingListListChildren.length; i++) {
            // define current list item
            listItem = this.shoppingListListChildren[i];
            // get current list item's checkbox and delete button
            checkbox = listItem.getElementsByTagName('input')[0];
            deleteButton = listItem.getElementsByTagName('i')[0];

            deleteButton.addEventListener('click', () => {
                this.deleteItem();
            })
        }
    },
    deleteItem: function() {
        listItem.remove();
        this.scanList();
        console.log('deleted')
    }
}



function init() {
    shoppingList.selectElements()
    shoppingList.addButtonEvent()
    shoppingList.scanList()
}

init()