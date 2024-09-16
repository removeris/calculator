function enterNumber() {
    const buttons = document.querySelectorAll(".number");

    const result = document.querySelector("#result");

    number = result.textContent;

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            if(number.length < 17 || parseInt(number) <= Number.MAX_SAFE_INTEGER){
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
                        number += '0'
                        break;
                    default:
                        break;
                }
                result.textContent = number;
            }
            else {
                alert("The number is too large.");
            }
        })
    })
}

enterNumber();