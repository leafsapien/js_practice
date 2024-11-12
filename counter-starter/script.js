const add = (step) => {
// Giving the number element an id of number so that we can use that the element
let numberElement = document.getElementById("number");
// innerText property gets the text inside the element
let number = numberElement.innerText;
console.log(number);
    number = parseInt(number) + step;
    numberElement.innerText = number;
};

const minus = (step) => {
    // Giving the number element an id of number so that we can use that the element
    let numberElement = document.getElementById("number");
    // innerText property gets the text inside the element
    let number = numberElement.innerText;
    console.log(number);
        number = parseInt(number) - step;
        numberElement.innerText = number;
    };

const reset = () => {
    // Giving the number element an id of number so that we can use that the element
    let numberElement = document.getElementById("number");
    console.log(number);
        number = parseInt(0);
        numberElement.innerText = number;
    // Clears input text box of numbers using reset button as well because I am **eXtRa**
    let inputValue = document.getElementById("input-value");
    inputValue.value = "";
    };

const inputSubmit = () => {
    // Gets existing number counter status to add or subtract from
    let numberElement = document.getElementById("number");
    //converts element to integer
    let currentNumber = parseInt(numberElement.innerText);
    // Gets the input value as element with the id "input-value"
    let inputValue = document.getElementById("input-value");
    //converts element to integer
    let inputNumber = parseInt(inputValue.value);
    // Add the input value to the current number
    let newNumber = currentNumber + inputNumber;
    numberElement.innerText = newNumber;
    };