// write a js program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

function check(num1,num2){
    if (num1===100 || num2===100 || num1+num2===100) {
        return true
    }
    else return false
}
console.log(check(90,10))

// 2. write a js program to get the extension of a filename
const getExtensionOfFile=(str)=>str.slice(str.lastIndexOf('.'));
console.log(getExtensionOfFile("random.js"));

// 3. write a js program to replace every character in a give string with the character following it in the alphabet
// note split method is used to convert string to an array

const replace = (str) => {
    return str.split('').map(char => {
        // Get the ASCII code of the character and add 1 to it
        let newCharCode = char.charCodeAt(0) + 1;
        
        // Convert the new ASCII code back to a character
        return String.fromCharCode(newCharCode);
    }).join(''); // Join the array back into a string
};

console.log(replace("sakshi"));

// 4. js program to get the current date 
// Expected output: mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
console.log(new Date().toLocaleDateString());


// 5. write a js program to create a new string adding "New!" in front of given string. If the given string begins with "New!" already then return the original string
function checkString(string){
    if (string.includes("New!")) {
        return string
    }
    return `New! ${string}`
}

console.log(checkString("New! i am done with life"));
console.log(checkString("i am string without new"));