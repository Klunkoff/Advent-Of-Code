import { findCurrentValue } from "./manageData/processingData.js";

function app() {

    function findCode() {

        let result = 0;
        const valuesArray = findCurrentValue();

        valuesArray.forEach(value => {
            result += value;
        });
    
        return result;
    }
    
    const code = findCode();
    console.log(code);
}

app();
