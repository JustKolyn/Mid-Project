const welcome = "Greetings, this is simple math calculator. To use put two real numbers and choose the operation.\nRemember: you cannot divide by 0 and negative numbers cannot be powered by number in (-1;0)U(0;1) interval.";
alert(welcome);
const wrongInput = "Please use a real number as an input";
const firstNumber = "Insert the first number:";
const secondNumber = "Insert the second number:";
const operation = "Choose one from these operations: (+, -, *, /, %, **)";
const operationInputs = ["+", "-", "*", "/", "%", "**"];
const wrongOpInput = "Please use a given input."
let tryAgain = true;

while(tryAgain){
    let numberOne = prompt("First number:\n" + firstNumber);
    while (isNaN(Number(numberOne))) {
        alert(wrongInput);
        numberOne = prompt("First number:\n" + firstNumber);

        }
    let numberTwo = prompt("Second number:\n" + secondNumber);
    while (isNaN(Number(numberTwo))) {
        alert(wrongInput);
        numberTwo = prompt("Second number:\n" + secondNumber);
        }
    let op = prompt("Operation:\n" + operation);
    while(!operationInputs.includes(op)){
        alert(wrongOpInput);
        op = prompt("Operation:\n" + operation);
    }
        if(numberTwo==0 && op=="/"){
            alert("You cannot divide by 0");
            break;  
        }
        if(numberOne<0 && -1<numberTwo<0 && op=="**" ||numberOne<0 && 0<numberTwo<1 && op=="**"){
            alert("Negative numbers cannot be powered by number in (-1;0)U(0;1) interval.");
            break;
        }
        let result = 0;
        for(let i=0; i<6; i++){
            if(op==operationInputs[i]){
                if(i==0){
                    result = Number(numberOne) + Number(numberTwo);
                }
                if(i==1){
                    result = numberOne - numberTwo;
                }
                if(i==2){
                    result = numberOne * numberTwo;
                }
                if(i==3){
                    result = numberOne / numberTwo;
                }
                if(i==4){
                    result = numberOne % numberTwo;
                }
                if(i==5){
                    result = numberOne ** numberTwo;
                }
            }
        }
        alert("Result is " + result);
        
        tryAgain = confirm("Try again?");    
    

    }
