
function processingGameSets(sets) {

    let maxGameValuesObject = {
        red: 0,
        green: 0,
        blue: 0,
    };
    
    const setsArray = sets.split('; ');

    for (let set of setsArray) {
        let setArray = set.split(', ');

        let currentCubesObject = processingSet(setArray);
        maxGameValuesObject = compareValues(maxGameValuesObject, currentCubesObject);
        resetObjectValues(currentCubesObject);
    }

    const gamePowerNum = findGamePowerNum(maxGameValuesObject);
    resetObjectValues(maxGameValuesObject);

    return gamePowerNum;
}

function processingSet(setArray) {

    const currentCubesObject = {
        red: 0,
        green: 0,
        blue: 0,
    };

    for (let cube of setArray) {
        let [cubeNum, color] = cube.split(' ');
        cubeNum = Number(cubeNum);

        currentCubesObject[color] += cubeNum;
    }

    return currentCubesObject;
}

function compareValues(maxGameValuesObject, currentCubesObject) {

    for (let key in maxGameValuesObject) {

        if (currentCubesObject[key] > maxGameValuesObject[key]) {
            maxGameValuesObject[key] = currentCubesObject[key];
        }
    }

    return maxGameValuesObject;
}

function findGamePowerNum(gameObject) {

    let powerNum = 1;
    const values = Object.values(gameObject);

    for (let value of values) {
        powerNum *= value;
    }

    return powerNum;
}

function resetObjectValues(object) {

    for (let key in object) {
        object[key] = 0;
    }
}

export { processingGameSets };