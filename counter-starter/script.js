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

const reset = (step) => {
    // Giving the number element an id of number so that we can use that the element
    let numberElement = document.getElementById("number");
    // innerText property gets the text inside the element
    let number = numberElement.innerText;
    console.log(number);
        number = parseInt(0);
        numberElement.innerText = number;
    };

    const input = (step) => {
        // Giving the number element an id of number so that we can use that the element
        let numberElement = document.getElementById("number");
        // innerText property gets the text inside the element
        let number = numberElement.innerText;
        console.log(number);
            number = parseInt(number) + step;
            numberElement.innerText = number;
        };