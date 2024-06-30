// 1. write a js code to create a new string from a given string taking the first 3 chars and last 3 chars of a string and adding them together. The string len must be 3 or more, if not the original string is returned.

function newString(str){
    if (str.length<=3) {
        return str
    }
    // if () {
        
    // }
    // console.log(str.slice(0,3),str); slice method returns a new string it donot mutate the original string
    return str.slice(0,3)+str.slice(str.length-3)
}

console.log(newString("sakshi patel"));
console.log(newString("sak"));

// 2. write a js program to extract the first half of a even length string

function firstHalfOfEvenString(str){
    const len=str.length
    if (len%2===0) {
        return str.slice(0,len/2) 
    }
}

console.log(firstHalfOfEvenString("string"));

// 3. write a js program to concatenate two strings except their first chars
function concatStrings(str1,str2){
    return str1.slice(1) +str2.slice(1)
}

console.log(concatStrings("Sakshi","patel"));

// 4. given two values, write a js program to find out which one is nearest to 100
function nearTo100(num1,num2){
    // if (100-num1>100-num2) {
    //     return num2
    // }
    // return num1
    return (100-num1)>(100-num2)?num2:num1
}

console.log(nearTo100(100,2));
console.log(nearTo100(10,20));

// 5. write a js program to check a given string contains 2 to 4 occurrences of specified char
 function checkOccurrences(str,char) {
    const count=str.split('').filter(ch=>ch===char).length; // here split function will return array which contains a particular char
    return count>=2 && count<=4? true:false
 }

console.log(checkOccurrences("sakshi",'s'))
console.log(checkOccurrences("sak",'s'))