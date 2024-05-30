
const keywordsObject = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
}

function searchingKeywords(string, isLast) {

    let reversedString = '';

    if(isLast) {
        reversedString = string.split('').reverse().join('');
        string = reversedString;
    }

    const keys = Object.keys(keywordsObject);
    const key = keys.find(key => string.includes(key));
    const value = keywordsObject[key];
    return value;
}

export { searchingKeywords };