import { rawInput } from "./input.js";

const regex = /(\d+|one|two|three|four|five|six|seven|eight|nine)/g;
const refactoredInput = refactoringInput(rawInput);
const workingInput = takingStringsWithNums(refactoredInput);

function refactoringInput(input) {
    const inputArray = input.split('\n');
    return inputArray;
}

function takingStringsWithNums(refactoredInput) {
    const stringsWithDigitsArray = refactoredInput.filter(string => string.match(regex));
    return stringsWithDigitsArray;
}

export { workingInput };
