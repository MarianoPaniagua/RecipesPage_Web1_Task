// Send Recipe
document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("btn-add-ing").addEventListener("click", addRow);
    document.getElementById("btn-random").addEventListener("click", addRandomx3);
    document.getElementById("btn-show-fiter").addEventListener("click", showFilter);
    document.getElementById("RecipeF").addEventListener("keyup", filterTable);


    let recipes = [];
    let baseUrl = "https://web-unicen.herokuapp.com/api/groups/128paniagua/recipes";

    getAndUpdateTable();
    //setInterval(getAndUpdateTable, 10000);

    function getAndUpdateTable() {
        fetch(baseUrl)
            .then(function(r) {
                return r.json()
            }).then(function(rr) {
                recipes = rr.recipes
            }).then(updateTable)
    }

    function updateTable() {
        let new_tbody = document.createElement('tbody');
        let old_tbody = document.querySelector("tbody");
        recipes.forEach(function(eachRecipe) {
            let tr = document.createElement("tr");
            tr.id = eachRecipe._id;
            let recipe = document.createElement("td");
            recipe.innerHTML = eachRecipe.thing.Recipe;
            recipe.id = "td-recipe" + eachRecipe._id;
            let author = document.createElement("td");
            author.innerHTML = eachRecipe.thing.Author;
            author.id = "td-author" + eachRecipe._id;
            let editButton = document.createElement("button");
            let deleteBtn = document.createElement("button");

            editButton.classList.add("functionButtons", "fas", "fa-edit", "editBtn");
            editButton.id = "editButton-" + tr.id;
            deleteBtn.classList.add("functionButtons", "fas", "fa-trash", "deleteBtn");

            deleteBtn.addEventListener("click", deleteRecipe);
            editButton.addEventListener("click", editRecipe);

            tr.appendChild(recipe);
            tr.appendChild(author);
            tr.appendChild(editButton);
            tr.appendChild(deleteBtn);
            new_tbody.appendChild(tr);

            let div = document.createElement("div");
            div.id = "div" + tr.id;
            div.classList.add("showDivToEdit");
            let submitEdited = document.createElement("button");
            submitEdited.classList.add("functionButtons", "fas", "fa-edit", "editBtn", "editSubmitBtn");
            submitEdited.addEventListener("click", postEdited)
            let changeRecipe = document.createElement("input");
            changeRecipe.classList.add("input_modify_recipe");
            changeRecipe.type = "text";
            changeRecipe.placeholder = "RecipeToModify";
            changeRecipe.name = "Recipe";
            changeRecipe.id = "RecipeToModify" + tr.id;

            let changeAuthor = document.createElement("input");
            changeAuthor.classList.add("input_modify_recipe");
            changeAuthor.type = "text";
            changeAuthor.placeholder = "AuthorToModify";
            changeAuthor.name = "Author";
            changeAuthor.id = "AuthorToModify" + tr.id;
            let form = document.createElement("form");
            form.id = "form-" + tr.id;

            form.appendChild(submitEdited);
            form.appendChild(changeRecipe);
            form.appendChild(changeAuthor);
            form.classList.add("formToEdit");
            div.appendChild(form);
            div.classList.add("hide");
            new_tbody.appendChild(div);
        })
        old_tbody.parentNode.replaceChild(new_tbody, old_tbody)
    };

    function addRow() {
        var newRecipe = $("#add_ing_form").serializeObject();
        let data = {
            "thing": newRecipe
        };
        fetch(baseUrl, {
                "method": "POST",
                "headers": { "Content-Type": "application/json" },
                "body": JSON.stringify(data)
            })
            .then(() => {
                getAndUpdateTable()
            })
            .catch(function(e) {
                console.log(e)
            })
        Array.from(document.getElementsByClassName("input_send_recipe")).forEach((el) => {
            el.value = "";
        });

    }

    let authorRandom = ["JuanPerez", "EsebanQuito", "RamonaSuarez", "ElCabeGarcía"];
    let recipeRandom = ["Chocolate Sugar", "Chipa", "Roast Salmon", "Chicken Bread"];

    function addRandomx3() {
        for (i = 0; i < 3; i++) {
            let randomNum1 = Math.floor(Math.random() * 4)
            let randomNum2 = Math.floor(Math.random() * 4)
            let randomRecipe = { Recipe: recipeRandom[randomNum1], Author: authorRandom[randomNum2] }
            postRecipex3(randomRecipe);
        }
    }

    function postRecipex3(recipe) {
        let data = {
            "thing": recipe
        };
        fetch(baseUrl, {
                "method": "POST",
                "headers": { "Content-Type": "application/json" },
                "body": JSON.stringify(data)
            }).then(() => {
                getAndUpdateTable();
            })
            .catch(function(e) {
                console.log(e)
            })
    }

    function editRecipe(e) {
        let oldButton = document.getElementById("editButton-" + e.target.parentNode.id);
        oldButton.removeEventListener("click", editRecipe);
        oldButton.addEventListener("click", hideEditDiv);
        let div = document.getElementById("div" + e.target.parentNode.id);
        div.classList.remove("hide");
    }

    function hideEditDiv(e) {
        let oldButton2 = document.getElementById("editButton-" + e.target.parentNode.id);
        oldButton2.removeEventListener("click", hideEditDiv);
        oldButton2.addEventListener("click", editRecipe);
        let div = document.getElementById("div" + e.target.parentNode.id);
        div.classList.add("hide");
    }

    function createEditedRecipe(e) {
        let idClean = e.target.parentNode.id.replace('form-', '');
        let textRecipe = document.getElementById("RecipeToModify" + idClean).value;
        let authorRecipe = document.getElementById("AuthorToModify" + idClean).value;
        let editedRecipe = {};
        if (authorRecipe === "") {
            editedRecipe.Author = document.getElementById("td-author" + e.target.parentNode.id.replace('form-', '')).innerHTML;
        } else {
            editedRecipe.Author = authorRecipe;
        }
        if (textRecipe === "") {
            editedRecipe.Recipe = document.getElementById("td-recipe" + e.target.parentNode.id.replace('form-', '')).innerHTML;
        } else {
            editedRecipe.Recipe = textRecipe;
        }
        return editedRecipe;
    }

    function postEdited(e) {
        e.preventDefault();
        let editedRecipe = createEditedRecipe(e);
        let data = {
            "thing": editedRecipe
        };
        fetch(baseUrl + "/" + e.target.parentNode.parentNode.previousSibling.id, {
                "method": "PUT",
                "headers": { "Content-Type": "application/json" },
                "body": JSON.stringify(data)
            })
            .then(() => {
                getAndUpdateTable()
            })
            .catch(function(e) {
                console.log(e)
            })
        Array.from(document.getElementsByClassName("input_modify_recipe")).forEach((el) => {
            el.value = "";
        });

    }

    function deleteRecipe(e) {
        let id = e.target.parentNode.id;
        fetch(baseUrl + "/" + id, {
                "method": "DELETE"
            }).then(() => {
                getAndUpdateTable()
            })
            .catch(function(e) {
                console.log(e)
            })
    }

    function showFilter() {
        document.getElementById("RecipeF").classList.toggle("hide");
    }

    function filterTable() {
        var filteredTable = recipes.filter(function(row) {
            return row.thing.Recipe.lastIndexOf(document.getElementById("RecipeF").value, 0) === 0;
        });
        updateTableFromFilter(filteredTable);
    }

    function updateTableFromFilter(filteredTable) {
        let new_tbody = document.createElement('tbody');
        let old_tbody = document.querySelector("tbody");
        filteredTable.forEach(function(eachRecipe) {
            let tr = document.createElement("tr");
            tr.id = eachRecipe._id;
            let recipe = document.createElement("td");
            recipe.innerHTML = eachRecipe.thing.Recipe;
            let author = document.createElement("td");
            author.innerHTML = eachRecipe.thing.Author;
            let editButton = document.createElement("button");
            let deleteBtn = document.createElement("button");

            editButton.classList.add("functionButtons", "fas", "fa-edit", "editBtn");
            editButton.id = "editButton-" + tr.id;
            deleteBtn.classList.add("functionButtons", "fas", "fa-trash", "deleteBtn");

            deleteBtn.addEventListener("click", deleteRecipe);
            editButton.addEventListener("click", editRecipe);

            tr.appendChild(recipe);
            tr.appendChild(author);
            tr.appendChild(editButton);
            tr.appendChild(deleteBtn);
            new_tbody.appendChild(tr);

            let div = document.createElement("div");
            div.id = "div" + tr.id;
            div.classList.add("showDivToEdit");
            let submitEdited = document.createElement("button");
            submitEdited.classList.add("functionButtons", "fas", "fa-edit", "editBtn", "editSubmitBtn");
            submitEdited.addEventListener("click", postEdited)
            let changeRecipe = document.createElement("input");
            changeRecipe.classList.add("input_modify_recipe");
            changeRecipe.type = "text";
            changeRecipe.placeholder = "RecipeToModify";
            changeRecipe.name = "Recipe";
            changeRecipe.id = "RecipeToModify";

            let changeAuthor = document.createElement("input");
            changeAuthor.classList.add("input_modify_recipe");
            changeAuthor.type = "text";
            changeAuthor.placeholder = "AuthorToModify";
            changeAuthor.name = "Author";
            changeAuthor.id = "AuthorToModify";
            let form = document.createElement("form");
            form.id = "form-" + tr.id;

            form.appendChild(submitEdited);
            form.appendChild(changeRecipe);
            form.appendChild(changeAuthor);
            form.classList.add("formToEdit");
            div.appendChild(form);
            div.classList.add("hide");
            new_tbody.appendChild(div);
        })
        old_tbody.parentNode.replaceChild(new_tbody, old_tbody)
    };
});