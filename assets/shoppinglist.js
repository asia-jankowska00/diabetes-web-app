let shoppingList = {
    selectElements: function() {
       this.listInputField = document.getElementById('input-item-field');
       this.addItemBtn = document.getElementById('add-item-btn');
       this.clearListBtn = document.getElementById('clear-list-btn');
       this.shoppingListList = document.getElementById('shopping-list-list');
       this.shoppingListListChildren = this.shoppingListList.children;
    },
    createItem: function() {
        // create li element with attributes, value, checkbox, and delete button
        let shoppingListItem, shoppingListItemCheckbox, shoppingListItemValue, shoppingListItemDeleteBtn;
        shoppingListItem = document.createElement('li');
        shoppingListItem.setAttribute('class', 'shopping-list-item');
    }
}