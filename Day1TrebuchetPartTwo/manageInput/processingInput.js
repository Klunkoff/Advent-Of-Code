import { rawInput } from "./input.js";

function refactoringInput(input) {
    const inputArray = input.split('\n');
    return inputArray;
}

function getWorkingInput() {
    const regex = /(\d+|one|two|three|four|five|six|seven|eight|nine)/g;
    const refactoredInput = refactoringInput(rawInput);
    const stringsWithDigitsArray = refactoredInput.filter(string => string.match(regex));
    return stringsWithDigitsArray;
}

export { getWorkingInput };
