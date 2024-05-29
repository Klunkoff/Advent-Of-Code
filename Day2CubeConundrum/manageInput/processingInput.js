import { rawInput } from "./input.js";

const refactoredInputArray = refactoringInput(rawInput);

function refactoringInput(input) {
    const inputArray = input.split('\n');
    return inputArray;
}

export { refactoredInputArray };

