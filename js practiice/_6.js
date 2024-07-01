// 1. write a js function that returns a passed string with letters in alphabetical order
// eg: str: abhisa
// o/p: str: aabhis

function sortString(str){
    return str.split("").sort().join("")
}

console.log(sortString('abhisa'));
console.log(sortString('Sakshi is a girl'));

// 2. write a js function that accepts a string as a parameter and counts the number of vowels withing the string

const countVowel=(str)=>{
    const vowels=['a','e','i','o','u'];
    return str.split('').filter(ch=>vowels.includes(ch)).length
}
console.log(countVowel("Hello World")); 
console.log(countVowel("JavaScript"));  
console.log(countVowel("OpenAI")); 

// write a js program to convert an amount to coins
// eg: input is 46 and possible coins 25,10,5,2,1
// o/p : 25,10,10,1

const convertCoins=(amt)=>{
    
}