import { valuesArray } from "./manageData/processingData.js";

function app() {

    function findCode() {

        let result = 0;
        valuesArray.forEach(value => {
            result += value;
        });
    
        return result;
    }
    
    const code = findCode();
    console.log(code);
}

app();
