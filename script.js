function hasClass(elem, string) {
    return Array.from(elem.classList).includes(string);
}

function isValidNumber(num) {
    num = parseInt(num);
    return number.length <= 16 || number < Number.MAX_SAFE_INTEGER;
}

function getUserInput() {
    const buttons = document.querySelectorAll(".number, .operation");

    const result = document.querySelector("#result");

    number = result.textContent;

    let operation;

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            if(hasClass(e.target, "number")){
                if(isValidNumber(number)){
                    switch(e.target.id){
                        case "one":
                            number += '1';
                            break;
                        case "two":
                            number += '2';
                            break;
                        case "three":
                            number += '3';
                            break;
                        case "four":
                            number += '4';
                            break;
                        case "five":
                            number += '5';
                            break;
                        case "six":
                            number += '6';
                            break;
                        case "seven":
                            number += '7';
                            break;
                        case "eight":
                            number += '8';
                            break;
                        case "nine":
                            number += '9';
                            break;
                        case "zero":
                            number += '0';
                            break;
                        case "floating-point":
                            number += ".";
                            break;
                        case "return":
                            number = number.slice(0, number.length - 1); 
                            break;
                    }
                }
                else {
                    alert("The number is too large.");
                }
                result.textContent = number;
            }
            else if(hasClass(e.target, "operation")) {
                switch(e.target.id){
                    case "add":
                        operation = "+";
                        break;
                    case "subtract":
                        operation = "-";
                        break;
                    case "multiply":
                        operation = "X";
                        break;
                    case "divide":
                        operation = "/";
                        break;
                    case "equals":
                        operation = "=";
                        break;
                }
                console.log(operation);
            }
        })
    })
}

getUserInput();