import { getInput } from "../manageInput/processingInput.js";
import { processingGameSets } from "./processingSets.js";

function processingGame() {
    
    const input = getInput();
    const gamesArray = [];

    for (let game of input) {

        let [currentGame, sets] = game.split(': ');
        let [name, currentGameNumber] = currentGame.split(' ');
        currentGameNumber = Number(currentGameNumber);

        let isPossibleGame = processingGameSets(sets);
        
        if (isPossibleGame) {
            gamesArray.push(currentGameNumber);
        }
    }

    return gamesArray;
}

export { processingGame };

