let chocolateCheesecake = [
    { Ingredient: "Flour", Quantity: "300 gr" },
    { Ingredient: "Pure cocoa without sugar", Quantity: "300 gr" },
    { Ingredient: "Sugar", Quantity: "80 gr" },
    { Ingredient: "Butter", Quantity: "250 gr" },
    { Ingredient: "Milk", Quantity: "250 ml" },
    { Ingredient: "Chocolate", Quantity: "80 gr" },
    { Ingredient: "Chocolate sauce", Quantity: "80 gr" },
    { Ingredient: "Strawberry", Quantity: "250 gr" },
    { Ingredient: "Milk cream", Quantity: "250 ml" }
];

let chickenSandwich = [
    { Ingredient: "Chicken", Quantity: "300 gr" },
    { Ingredient: "Lactal Bread", Quantity: "300 gr" },
    { Ingredient: "Avocado", Quantity: "80 gr" },
    { Ingredient: "Red pepper", Quantity: "250 gr" },
    { Ingredient: "Lettuce", Quantity: "250 ml" },
    { Ingredient: "Soy sauce", Quantity: "80 gr" },
    { Ingredient: "Sugar", Quantity: "80 gr" },
    { Ingredient: "Onion", Quantity: "250 gr" }
];

let brownieCup = [
    { Ingredient: "Flour", Quantity: "300 gr" },
    { Ingredient: "Pure cocoa without sugar", Quantity: "300 gr" },
    { Ingredient: "Sugar", Quantity: "80 gr" },
    { Ingredient: "Butter", Quantity: "250 gr" },
    { Ingredient: "Milk", Quantity: "250 ml" },
    { Ingredient: "Chocolate", Quantity: "80 gr" },
    { Ingredient: "Chocolate sauce", Quantity: "80 gr" },
    { Ingredient: "Strawberry", Quantity: "250 gr" },
    { Ingredient: "Milk cream", Quantity: "250 ml" }
];

let chickenBurgerKing = [
    { Ingredient: "Chicken", Quantity: "300 gr" },
    { Ingredient: "Lactal Bread", Quantity: "300 gr" },
    { Ingredient: "Avocado", Quantity: "80 gr" },
    { Ingredient: "Red pepper", Quantity: "250 gr" },
    { Ingredient: "Lettuce", Quantity: "250 ml" },
    { Ingredient: "Soy sauce", Quantity: "80 gr" },
    { Ingredient: "Sugar", Quantity: "80 gr" },
    { Ingredient: "Onion", Quantity: "250 gr" }
];

let chocolateMuffin = [
    { Ingredient: "Flour", Quantity: "300 gr" },
    { Ingredient: "Pure cocoa without sugar", Quantity: "300 gr" },
    { Ingredient: "Sugar", Quantity: "80 gr" },
    { Ingredient: "Butter", Quantity: "250 gr" },
    { Ingredient: "Milk", Quantity: "250 ml" },
    { Ingredient: "Chocolate", Quantity: "80 gr" },
    { Ingredient: "Chocolate sauce", Quantity: "80 gr" },
    { Ingredient: "Strawberry", Quantity: "250 gr" },
    { Ingredient: "Milk cream", Quantity: "250 ml" }
];

let chickenSalad = [
    { Ingredient: "Chicken", Quantity: "300 gr" },
    { Ingredient: "Lettuce", Quantity: "250 ml" },
    { Ingredient: "Onion", Quantity: "250 gr" }
];

let chickenHamburger = [
    { Ingredient: "Chicken", Quantity: "300 gr" },
    { Ingredient: "Lactal Bread", Quantity: "300 gr" },
    { Ingredient: "Avocado", Quantity: "80 gr" },
    { Ingredient: "Red pepper", Quantity: "250 gr" },
    { Ingredient: "Lettuce", Quantity: "250 ml" },
    { Ingredient: "Soy sauce", Quantity: "80 gr" },
    { Ingredient: "Sugar", Quantity: "80 gr" },
    { Ingredient: "Onion", Quantity: "250 gr" }
];

let tableElement = document.querySelector(".recipe_table");
let recipeName = tableElement.id;

generateTableHead(recipeName);

function generateTableHead(recipeName) {
    let recipeObj = getRecipeObj(recipeName);
    let tbody = document.querySelector("tbody");
    recipeObj.forEach(function(eachIngredient) {
        let tr = document.createElement("tr");
        let ingredientTd = document.createElement("td");
        ingredientTd.innerHTML = eachIngredient.Ingredient;
        let quantityTd = document.createElement("td");
        quantityTd.innerHTML = eachIngredient.Quantity;
        tr.appendChild(ingredientTd);
        tr.appendChild(quantityTd);
        tbody.appendChild(tr);
    })
}

function getRecipeObj(recipeName) {
    switch (recipeName) {
        case "chocolateCheesecake":
            return chocolateCheesecake;

        case "chickenSandwich":
            return chickenSandwich;

        case "brownieCup":
            return brownieCup;

        case "chickenBurgerKing":
            return chickenBurgerKing;

        case "chickenHamburger":
            return chickenHamburger;

        case "chickenSalad":
            return chickenSalad;

        case "chocolateMuffin":
            return chocolateMuffin;
    }
}