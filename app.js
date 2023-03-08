let elForm = document.querySelector(".js-form")
let elInputOne = document.querySelector(".inputone")
let elInputSecond = document.querySelector(".inputsecond")
let select = document.querySelector(".select");
let elResult = document.querySelector(".result")
let elBtn = document.querySelector(".btn")
let elAgain = document.querySelector(".again")

elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    elBtn.classList.remove("btn");
    elBtn.classList.add("again");
    elAgain.classList.remove("again");
    elAgain.classList.add("refresh")


    let inputOneValue = Number(elInputOne.value.trim());
    let inputSecondValue = Number(elInputSecond.value.trim());

    if (select.value == "+") {
        elResult.textContent = inputOneValue + inputSecondValue;
    } else if (select.value == "-") {
        elResult.textContent = inputOneValue - inputSecondValue;

    } else if (select.value == "*") {
        elResult.textContent = inputOneValue * inputSecondValue;

    } else if (select.value == "/") {
        elResult.textContent = inputOneValue / inputSecondValue;

    }

    // elBtn.addEventListener("submit", function(evt) {
    //     elBtn.textContent = "Again"

    //     function refreshPage() {
    //         window.location.reload();
    //     }


    // })





});