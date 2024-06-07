import * as fs from 'fs';

function getInput() {
    
    const filePath = './Day2CubeConundrumPartTwo/manageInput/input.txt';
    const data = fs.readFileSync(filePath, 'utf8');
    return data.split(/\r\n|[\n\v\f\r\x85\u2028\u2029]/);
}

export { getInput };

