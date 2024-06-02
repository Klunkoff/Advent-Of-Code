import { getRawInput } from "./readInputFromFile.js";

function getWorkingInput() {
    
    const rawInput = getRawInput();
    const stringsWithDigitsArray = rawInput.filter(string => string.match(/\d/g));
    return stringsWithDigitsArray;
}

export { getWorkingInput };
