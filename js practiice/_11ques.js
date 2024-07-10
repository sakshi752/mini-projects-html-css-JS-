// reverse a string
function revString(str) {
    return str.split('').reverse().join('')
}
console.log(revString('sakshi'));

// check that a string starts and ends with certain char
function checkFirstAndLastChar(str) {
    return str.charAt(0)===str.charAt(str.length-1)
}
console.log(checkFirstAndLastChar('sakshis'));
console.log(checkFirstAndLastChar('sakshi'));

// check weather a string contains a substring or not
function checkSubStr(str,subStr) {
    return str.includes(subStr)
}

console.log(checkSubStr('sakshi','saks'));
console.log(checkSubStr('sakshi','saki'));