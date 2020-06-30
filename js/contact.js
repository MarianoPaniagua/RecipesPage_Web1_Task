document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("randomCaptcha").innerHTML = generateRandomCaptcha();
    document.getElementById("btn-send").addEventListener("click", validate);

    function generateRandomCaptcha() {
        const leftnums = [5, 13, 15, 20, 5];
        const rightnums = [2, 6, 9, 65];
        let firstNumber = leftnums[Math.floor(Math.random() * leftnums.length)];
        let secondNumber = rightnums[Math.floor(Math.random() * rightnums.length)];
        let thirdNumber = rightnums[Math.floor(Math.random() * rightnums.length)];

        return "" + firstNumber + secondNumber + thirdNumber;
    }

    function validate() {
        let userInputCaptcha = document.getElementById("userInputCaptcha").value;
        let randomCaptcha = document.getElementById("randomCaptcha").innerHTML;
        if (!(userInputCaptcha === randomCaptcha)) {
            document.getElementById("successful").classList.remove("show");
            document.getElementById("failed").classList.add("show");
            document.getElementById("randomCaptcha").innerHTML = generateRandomCaptcha();
        } else {
            document.getElementById("failed").classList.remove("show");
            document.getElementById("successful").classList.add("show");
            document.getElementById("randomCaptcha").innerHTML = generateRandomCaptcha();
        }
    }
});