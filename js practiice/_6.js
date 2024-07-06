// 1. write a js function that returns a passed string with letters in alphabetical order
// eg: str: abhisa
// o/p: str: aabhis

function sortString(str) {
    return str.split("").sort().join("")
}

console.log(sortString('abhisa'));
console.log(sortString('Sakshi is a girl'));

// 2. write a js function that accepts a string as a parameter and counts the number of vowels withing the string

const countVowel = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(ch => vowels.includes(ch)).length
}
console.log(countVowel("Hello World"));
console.log(countVowel("JavaScript"));
console.log(countVowel("OpenAI"));

// 3. write a js program to convert an amount to coins
// eg: input is 46 and possible coins 25,10,5,2,1
// o/p : 25,10,10,1

const convertCoins = (amt) => {
    let coins = [25, 10, 5, 2, 1];
    let totalCoins = []
    for (let i = 0; i < coins.length; i++) {
        const thisCoinNumber = Math.floor(amt / coins[i]);
        for (let j = 0; j < thisCoinNumber; j++) {
            totalCoins.push(coins[i]);
        }
        amt -= coins[i] * thisCoinNumber
    }
    return totalCoins
}

console.log(convertCoins(1));
console.log(convertCoins(51));
console.log(convertCoins(77));
console.log(convertCoins(46));

// 4. write a js funtion to extract unique chars from a string

function uniqueChars1(str) {
    const uniqueCharSet = new Set(str);

    return [...uniqueCharSet].join('')
}

console.log(uniqueChars1('dnakncccclakqaamzziwq'));
// note set is basically a unique list of values

// 5. write a js function to find the first not repeated character
// eg. 'abacddbec'
// o/p 'e'

const getNonRepeatedChars = (str) => {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}

console.log(getNonRepeatedChars('abacddbec'));

// 6. get char from the ascii code
const getChar=(code)=>{
    return String.fromCharCode(code)
}

console.log(getChar(77));
console.log(getChar(100));

