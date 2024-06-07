import { getRawInput } from "./readInputFromFile.js";

function getWorkingInput() {

    const regex = /(\d+|one|two|three|four|five|six|seven|eight|nine)/g;
    const rawInput = getRawInput();
    const stringsWithDigitsArray = rawInput.filter(string => string.match(regex));
    console.log(stringsWithDigitsArray);
    return stringsWithDigitsArray;
}

export { getWorkingInput };
