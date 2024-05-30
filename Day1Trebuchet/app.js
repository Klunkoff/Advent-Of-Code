import { findCurrentValue } from "./manageData/processingData.js";
import { workingInput } from "./manageInput/processingInput.js";

function app() {

    function findCode() {

        let result = 0;
        const valuesArray = findCurrentValue(workingInput);

        valuesArray.forEach(value => {
            result += value;
        });
    
        return result;
    }
    
    const code = findCode();
    console.log(code);
}

app();
