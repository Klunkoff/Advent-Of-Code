import { workingInput } from "../manageInput/processingInput.js";

const valuesArray = [];
findCurrentValue(workingInput);

function findCurrentValue(workingInput) {

    for (let string of workingInput) {

        let firstDigit = findFirstDigit(string);
        let lastDigit = findLastDigit(string);

        let value = Number(firstDigit + lastDigit);

        valuesArray.push(value);
    }
}

function findFirstDigit(string) {

    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i];

        if(parseInt(currentChar)) {
            return currentChar;
        }
    }
}

function findLastDigit(string) {

    for (let i = string.length - 1; i >= 0; i--) {
        let currentChar = string[i];

        if(parseInt(currentChar)) {
            return currentChar;
        }
    }
}

export { valuesArray };
