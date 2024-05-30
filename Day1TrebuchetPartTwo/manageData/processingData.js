import { getWorkingInput } from "../manageInput/processingInput.js";
import { searchingKeywords } from "./processingWords.js";

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

    let currentWord = '';
    const isLast = false;

    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i];

        if(parseInt(currentChar)) {
            return currentChar;
        } else {
            currentWord += currentChar;
        }

        let checkedWord = searchingKeywords(currentWord, isLast);

        if(checkedWord) {
            currentWord = '';
            return checkedWord;
        }
    }
}

function findLastDigit(string) {
    
    let currentWord = '';
    const isLast = true;

    for (let i = string.length - 1; i >= 0; i--) {
        let currentChar = string[i];

        if(parseInt(currentChar)) {
            return currentChar;
        } else {
            currentWord += currentChar;
        }

        let checkedWord = searchingKeywords(currentWord, isLast);

        if(checkedWord) {
            currentWord = '';
            return checkedWord;
        }
    }
}

export { findCurrentValue };
