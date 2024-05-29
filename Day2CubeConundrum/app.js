import { gamesArray } from "./manageData/processingGames.js";

function app() {

    function getGames(gamesArray) {
        
        let result = 0;
        
        gamesArray.forEach(value => {
            result += value;
        });
    
        return result;
    }
    
    const code = getGames(gamesArray);
    console.log(code);
}

app();
