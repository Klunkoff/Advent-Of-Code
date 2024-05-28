import { workingInput } from "../manageInput/processingInput.js";
import { searchingKeywords } from "./processingWords.js";

const valuesArray = [];
let currentWord = '';
let isLast = false;

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

    isLast = false;

    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i];

        if(parseInt(currentChar)) {
            return currentChar;
        } else {
            currentWord += currentChar;
        }

        let checkedWord = searchingKeywords(currentWord);

        if(checkedWord) {
            currentWord = '';
            return checkedWord;
        }
    }
}

function findLastDigit(string) {

    isLast = true;

    for (let i = string.length - 1; i >= 0; i--) {
        let currentChar = string[i];

        if(parseInt(currentChar)) {
            return currentChar;
        } else {
            currentWord += currentChar;
        }

        let checkedWord = searchingKeywords(currentWord);

        if(checkedWord) {
            currentWord = '';
            return checkedWord;
        }
    }
}

export { valuesArray, isLast };
