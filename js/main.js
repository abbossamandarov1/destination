var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elFirst = document.querySelector(".js-result-first");
var elSecond = document.querySelector(".js-result-second");
var elThird = document.querySelector(".js-result-third");
var elFourth = document.querySelector(".js-result-fourth");
var elOverall = document.querySelector(".js-overall");



elForm.addEventListener("submit", function(event) {
    event.preventDefault();


    if (elInput.value <= 0) {
        elOverall.textContent = "Enter the number"
        elInput.classList.add("is-invalid")
        elInput.classList.remove("is-valid")
        return;
    } else {
        elOverall.textContent = 'False'
        elInput.classList.add("is-valid")
        elInput.classList.remove("is-invalid")
    }


    elFirst.textContent = first().toFixed(1);
    elSecond.textContent = second().toFixed(1);
    elThird.textContent = third().toFixed(1);
    elFourth.textContent = fourth().toFixed(1);
})

function first(a = 3.6) {
    return +elInput.value / a

}

function second(a = 20.1) {
    return +elInput.value / a
}

function third(a = 70) {
    return +elInput.value / a
}

function fourth(a = 800) {
    return +elInput.value / a
}