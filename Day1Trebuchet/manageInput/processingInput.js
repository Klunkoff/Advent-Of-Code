import { rawInput } from "./input.js";

const refactoredInput = refactoringInput(rawInput);
const workingInput = takingStringsWithNums(refactoredInput);


function refactoringInput(input) {
    const inputArray = input.split('\n');
    return inputArray;
}

function takingStringsWithNums(refactoredInput) {
    const stringsWithDigitsArray = refactoredInput.filter(string => string.match(/\d/g));
    return stringsWithDigitsArray;
}

export { workingInput };
