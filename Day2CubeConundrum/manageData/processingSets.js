function processingGameSets(sets) {

    const setsArray = sets.split('; ');

    for (let set of setsArray) {
        let setArray = set.split(', ');

        let setResult = processingSet(setArray);

        if(!setResult) {
            return false;
        }
    }

    return true;
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

    let isPossibleGame = checkResult(currentCubesObject);
    resetObjectValues(currentCubesObject);
    
    return isPossibleGame;
}

function checkResult(currentCubesObject) {

    let isFalse = true;

    const MaxCubeValuesObject = {
        red: 12,
        green: 13,
        blue: 14,
    }

    for (let key in MaxCubeValuesObject) {
        if (currentCubesObject[key] > MaxCubeValuesObject[key]){
            isFalse = false;
        } 
    }

    return isFalse;
}

function resetObjectValues(object) {

    for (let key in object) {
        object[key] = 0;
    }
}

export { processingGameSets };