import { rawInput } from "./input.js";

const refactoredInput = refactoringInput(rawInput);
const workingInput = takingStringsOverTwoNums(refactoredInput);


function refactoringInput(input) {
    const inputArray = input.split('\n');
    return inputArray;
}

function takingStringsOverTwoNums(refactoredInput) {
    const minTwoDigitsArray = refactoredInput.filter(string => string.match(/\d/g));
    return minTwoDigitsArray;
}

export { workingInput };
