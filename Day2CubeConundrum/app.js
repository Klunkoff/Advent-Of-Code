import { processingGame } from "./manageData/processingGames.js";

function app() {

    function getGames() {
        
        const gamesArray = processingGame();
        let result = 0;
        
        gamesArray.forEach(value => {
            result += value;
        });
    
        return result;
    }
    
    const code = getGames();
    console.log(code);
}

app();
