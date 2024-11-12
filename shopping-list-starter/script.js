const addItem = () => {
    let item = document.getElementById("new-item-text").value;
    let itemBox = document.getElementById("new-item-text");
    shoppingListItems = [...shoppingListItems, item];
    updateItems();
    itemBox.value = "";
};

const updateItems = () => {
    // Get the list element
    let listElement = document.getElementById("shopping-list-items");
    // Clear it of any existing items
    listElement.innerHTML = "";
    // Loop through the shopping list items and add them to the list
    for (const shoppingItem of shoppingListItems) {
        let itemElement = document.createElement("li");
        itemElement.innerText = shoppingItem;
        listElement.appendChild(itemElement);
    }
};

let shoppingListItems = ["milk", "eggs", "bread"];
    updateItems();

const clearItems = () => {
    shoppingListItems = [""];
    updateItems();
    let textBox = document.getElementById("new-item-text");
    textBox.value = "";
};