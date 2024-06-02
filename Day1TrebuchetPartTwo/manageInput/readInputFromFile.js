import * as fs from 'fs';

function getRawInput() {
    
    const filePath = './Day1Trebuchet/manageInput/input1.txt';
    const data = fs.readFileSync(filePath, 'utf8');
    return data.split(/\r\n|[\n\v\f\r\x85\u2028\u2029]/);
}

export { getRawInput };
