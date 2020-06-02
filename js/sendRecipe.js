// Send Recipe

document.getElementById("btn-add-ing").addEventListener("click", addRow);
document.getElementById("btn-delete-ing").addEventListener("click", deleteRow);
document.getElementById("btn-delete-all").addEventListener("click", deleteAll);
document.getElementById("btn-submit").addEventListener("click", submitRecipe);


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