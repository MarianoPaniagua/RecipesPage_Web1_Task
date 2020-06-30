document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("aldente").addEventListener("click", getTechnique);
    document.getElementById("acidulate").addEventListener("click", getTechnique);
    document.getElementById("barbecuing").addEventListener("click", getTechnique);
    document.getElementById("caramelization").addEventListener("click", getTechnique);
    document.getElementById("coddling").addEventListener("click", getTechnique);

    let baseUrl = "https://webtpmariano.herokuapp.com/";

    function getTechnique(e) {
        fetch(baseUrl + e.target.id + ".html")
            .then(function(r) {
                if (r.status == 200) {
                    return r.text();
                } else {
                    return "Sorry, there was an error on the server. Please try again in a few minutes"
                }
            }).then(function(text) {
                div = document.getElementById("div-to-show-tech");
                div.classList.add("formatDiv");
                div.innerHTML = text;
            })
    }

})