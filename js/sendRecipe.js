// Send Recipe

document.getElementById("btn-add-ing").addEventListener("click", addRow);
document.getElementById("btn-delete-ing").addEventListener("click", deleteRow);
document.getElementById("btn-delete-all").addEventListener("click", deleteAll);
document.getElementById("btn-submit").addEventListener("click", submitRecipe);
document.getElementById("btn-random").addEventListener("click", addRandomx3);

let recipe = [];
let tableElement = document.querySelector("#send_recipe_table");

function updateTable() {
    let new_tbody = document.createElement('tbody');
    let old_tbody = document.querySelector("tbody");
    recipe.forEach(function(eachRow) {
        let tr = document.createElement("tr");
        let ingredient = document.createElement("td");
        ingredient.innerHTML = eachRow.Ingredient;
        let quantity = document.createElement("td");
        quantity.innerHTML = eachRow.Quantity;
        tr.appendChild(ingredient);
        tr.appendChild(quantity);
        new_tbody.appendChild(tr);
    })
    old_tbody.parentNode.replaceChild(new_tbody, old_tbody)
};

function addRow() {
    var objetoDelForm = $("#send_recipe_form").serializeObject();
    recipe.push(objetoDelForm);
    updateTable();
}

function deleteRow() {
    recipe.pop();
    updateTable();
}

function deleteAll() {
    recipe = [];
    updateTable();
}

function submitRecipe() {
    $('.submitMessage').toggleClass("show");
}

let ingRandom = ["Sugar", "Salt", "Bread", "Milk"];
let qtyRandom = ["200 gr", "400 ml", "130 gr", "3 u"];

function addRandomx3() {
    for (i = 0; i < 3; i++) {
        let randomNum1 = Math.floor(Math.random() * 4)
        let randomNum2 = Math.floor(Math.random() * 4)
        let rowRandom = { Ingredient: ingRandom[randomNum1], Quantity: qtyRandom[randomNum2] }
        recipe.push(rowRandom);
    }
    updateTable();
}