const inputOperation = document.getElementById("input--operations");
const inputResult = document.getElementById("input--result");
//LUIS ANGEL DIAZ DIAZ 
let operation = " ", acumuletValue = 0;

function showcharacter(character) {
    inputOperation.value += character;
}

function operations(operation, number) {
    switch (operation) {
        case "+":
            acumuletValue += number;
            break;
        case "-":
            acumuletValue -= number;
            break;
        case "/":
            acumuletValue /= number;
            break;
        case "*":
            acumuletValue *= number;
            break;
    }
    inputResult.value = acumuletValue;
    inputOperation.value = "";
}

document.querySelectorAll(".button--operations").forEach(typeOperation => {

    typeOperation.addEventListener("click", function () {
        if (acumuletValue == 0 && /[0-9]/.test(inputOperation.value)) {

            acumuletValue = parseFloat(inputOperation.value);
            inputOperation.value = "";
            inputResult.value = acumuletValue;
            showcharacter(typeOperation.innerHTML);
        }
        if (/[/]|[*]|[+]|[-]/.test(inputOperation.value)) {
            inputOperation.value = typeOperation.innerHTML;
        }
        if (/[0-9]/.test(inputOperation.value)) {

            operations(operation, parseFloat(inputOperation.value));
            showcharacter(typeOperation.innerHTML);

        }
        operation = typeOperation.innerHTML;
    });
});

document.querySelectorAll(".button--number").forEach(number => {
    number.addEventListener("click", function () {

        if (/[/]|[*]|[+]|[-]/.test(inputOperation.value)) {

            inputResult.value += inputOperation.value;
            inputOperation.value = "";
        }

        showcharacter(number.innerHTML);
    });
});

document.querySelector(".button--point").addEventListener("click", () => {
    if (/[.]/.test(inputOperation.value) == false && /[0-9]/.test(inputOperation.value)) {
        showcharacter(document.querySelector(".button--point").innerHTML);
    }
});

document.querySelector(".button--equal").addEventListener("click", function () {

    if (/[0-9]/.test(inputOperation.value) && /[0-9]/.test(inputResult.value)) {

        operations(operation, parseFloat(inputOperation.value));
        let Total = acumuletValue;
        document.querySelectorAll(".button--functions")[0].click();
        inputOperation.value = Total;
    }
});

document.querySelectorAll(".button--functions")[0].addEventListener("click", () => {
    inputOperation.value = "";
    inputResult.value = "";
    acumuletValue = 0;
});
document.querySelectorAll(".button--functions")[1].addEventListener("click", () => {
    let str = inputOperation.value;
    inputOperation.value = str.substr(0,str.length-1);
});