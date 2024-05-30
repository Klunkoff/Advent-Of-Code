import { rawInput } from "./input.js";

function refactoringInput(input) {
    const inputArray = input.split('\n');
    return inputArray;
}

function getWorkingInput() {
    
    const refactoredInput = refactoringInput(rawInput);
    const stringsWithDigitsArray = refactoredInput.filter(string => string.match(/\d/g));
    return stringsWithDigitsArray;
}

export { getWorkingInput };
