import { getWorkingInput } from "../manageInput/processingInput.js";

function findCurrentValue() {
    
    const valuesArray = [];
    const workingInput = getWorkingInput();

    for (let string of workingInput) {

        let firstDigit = findFirstDigit(string);
        let lastDigit = findLastDigit(string);
        let value = Number(firstDigit + lastDigit);

        valuesArray.push(value);
    }

    return valuesArray;
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

export { findCurrentValue };
