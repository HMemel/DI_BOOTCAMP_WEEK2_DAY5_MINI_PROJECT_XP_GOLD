let inputText = document.getElementById("screen");
let operande1 = '';
let operande2 = '';
let operators = '';
let result;

function number(value) {
    if (operators == '') {
        operande1 += value;
        printToScreen(operande1);
    } else {
        operande2 += value;
        printToScreen(operande2);
    }
}

function operator(value) {
    operators = value;
}

function equal() {
    if (operande1 != -1 && operande2 != -1 && operators != '') {
        result = operation(operande1, operande2, operators);
        printToScreen(result);
    } else {
        printToScreen("Aucun calcul effectué!")
    }
    reset(false);
}

function reset(isResetPressed) {
    if (isResetPressed) {
        inputText.value = "0";
    }
    operande1 = '';
    operande2 = '';
    operators = '';
    result = '';
}

let btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click", (ev) => {
    clear();
});

function clear() {

    if (operande1 != '' || operande2 != '') {
        if (operators == '') {
            operande1 = operande1.replace(operande1.charAt(operande1.length - 1), '');
            printToScreen(operande1);
        } else {
            operande2 = operande1.replace(operande2.charAt(operande2.length - 1), '');
            printToScreen(operande2);
        }
    }
}

function printToScreen(value) {
    inputText.value = value;
}

function operation(operande1, operande2, operator) {
    if (operator == "+") {
        return parseFloat(operande1) + parseFloat(operande2);
    }
    if (operator == "-") {
        return parseFloat(operande1) - parseFloat(operande2);
    }
    if (operator == "*") {
        return parseFloat(operande1) * parseFloat(operande2);
    }
    if (operator == "/") {
        if (operande2 == 0) {
            return "Operation Impossible"
        } else {
            return parseFloat(operande1) / parseFloat(operande2);
        }
    }
}