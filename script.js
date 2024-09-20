function hasClass(elem, string) {
    return Array.from(elem.classList).includes(string);
}

function isValidNumber(num) {
    numLength = num.length;
    num = parseInt(num);
    return numLength <= 16 || num < Number.MAX_SAFE_INTEGER;
}

function deleteLastChar(string){
    return string.slice(0, string.length - 1);
}

function bothNumbersEntered(num1, num2) {
    return num1 != undefined && num2 != undefined
}

class calculator {
    constructor(){
        this.num = undefined;
        this.num2 = undefined;
        this.operationResult = undefined;
        this.currentOperation = '';
        this.screen = document.querySelector("#result");
    }

    addition() {
        return this.num1 + this.num2;
    }
    subtraction() {
        return this.num1 - this.num2;
    }
    multiplication () {
        return this.num1 * this.num2;
    }
    division() {
        return this.num1 / this.num2;
    }

    getUserInput(){
        const buttons = document.querySelectorAll(".number, .operation");

        let currentNumber = '';

        buttons.forEach((button) => {
            button.addEventListener("click", (e) => {
                if(hasClass(e.target, "number")){
                    if(isValidNumber(currentNumber)){
                        switch(e.target.id){
                            case "one":
                                currentNumber += '1';
                                break;
                            case "two":
                                currentNumber += '2';
                                break;
                            case "three":
                                currentNumber += '3';
                                break;
                            case "four":
                                currentNumber += '4';
                                break;
                            case "five":
                                currentNumber += '5';
                                break;
                            case "six":
                                currentNumber += '6';
                                break;
                            case "seven":
                                currentNumber += '7';
                                break;
                            case "eight":
                                currentNumber += '8';
                                break;
                            case "nine":
                                currentNumber += '9';
                                break;
                            case "zero":
                                currentNumber += '0';
                                break;
                            case "return":
                                currentNumber = deleteLastChar(currentNumber);
                                break;
                            case "floating-point":
                                if(!currentNumber.includes("."))
                                    currentNumber += ".";
                                break;
                        }
                    }
                    else {
                        if (e.target.id == "return")
                            currentNumber = deleteLastChar(curentNumber);
                        else
                            alert("The number is too large.");
                    }
                    this.screen.textContent = currentNumber;
                }
                else if(hasClass(e.target, "operation")) {
                    switch(e.target.id){
                        case "add": 
                            this.currentOperation += "+";
                            break;
                        case "subtract":
                            this.currentOperation += "-";
                            break;
                        case "multiply":
                            this.currentOperation += "X";
                            break;
                        case "divide":
                            this.currentOperation += "/";
                            break;
                    }

                    if(this.num1 == undefined){
                        this.num1 = parseFloat(currentNumber);
                        currentNumber = '';
                    }
                    else if(this.num2 == undefined){
                        this.num2 = parseFloat(currentNumber);
                        currentNumber = '';
                    }

                    if((bothNumbersEntered(this.num1, this.num2) && this.currentOperation != '') || (e.target.id == "equals" && bothNumbersEntered(this.num1, this.num2))){
                        this.performOperation();

                        if(e.target.id == "equals")
                            currentNumber = this.operationResult;   

                        if(this.currentOperation != ''){
                            this.num1 = this.operationResult;
                            currentNumber = '';
                        }
                    }
                        
                }
            })
        })
    }

    performOperation() {    
        switch(this.currentOperation.charAt(0)){
            case "+":
                this.operationResult = this.addition();
                break;
            case "-":
                this.operationResult = this.subtraction();
                break;
            case "X":
                this.operationResult = this.multiplication();
                break;
            case "/":
                this.operationResult = this.division();
                break;
        }
        this.num1 = undefined;
        this.num2 = undefined;
        
        this.currentOperation = this.currentOperation.substring(1);

        this.screen.textContent = parseFloat(this.operationResult);
    }

}

const calc = new calculator();

calc.getUserInput();