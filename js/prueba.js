document.addEventListener('DOMContentLoaded', iniciarContador);

function iniciarContador() {

    let contadorbtn1 = 0;
    let contadorbtn2 = 0;
    let contadorbtn3 = 0;

    const botones = document.querySelectorAll(".boton");
    botones.forEach(el => {
        el.addEventListener("click", function() {
            if (this.id === "btn1") {
                contadorbtn1++;
                document.getElementById("lbl1").innerHTML = contadorbtn1;
            }
            if (this.id === "btn2") {
                contadorbtn2++;
                document.getElementById("lbl2").innerHTML = contadorbtn2;
            }
            if (this.id === "btn3") {
                contadorbtn3++;
                document.getElementById("lbl3").innerHTML = contadorbtn3;
            }
        });
    });
}