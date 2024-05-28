import { valuesArray } from "./manageData/processingData.js";

function app() {

    function findCode(valuesArray) {
        let result = 0;
        valuesArray.forEach(value => {
            result += value;
        });
    
        return result;
    }
    
    const code = findCode(valuesArray);
    console.log(code);
}

app();
