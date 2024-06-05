import { getInput } from "../manageInput/processingInput.js";
import { processingGameSets } from "./processingSets.js";

function processingGame() {
    
    const input = getInput();
    const gamesArray = [];

    for (let game of input) {

        let [currentGame, sets] = game.split(': ');

        const gamePowerNumber = processingGameSets(sets);
        gamesArray.push(gamePowerNumber);
    }

    return gamesArray;
}

export { processingGame };

