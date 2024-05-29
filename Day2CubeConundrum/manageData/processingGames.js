import { refactoredInputArray } from "../manageInput/processingInput.js";
import { processingGameSets } from "./processingSets.js";

const gamesArray = processingGame(refactoredInputArray);

function processingGame(input) {
    
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

export { gamesArray };

