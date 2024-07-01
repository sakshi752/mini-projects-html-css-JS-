// 1. write a js program to find the number of even digits in a array of integers

function evenDigitsCount(arr){
    let ct=0;
    arr.map((el)=>{
        el%2===0?ct++:ct
    })
    return ct
}

console.log(evenDigitsCount([10,20,3,5,6,7,9]));
console.log(evenDigitsCount([2,2,2]));

// 2. write a js program to find the number of even values up to a given number

function evenValsUptoNum(number) {
    let arr = [];
    for (let i = 2; i <= number; i += 2) {
        arr.push(i);
    }
    return arr;
}

console.log(evenValsUptoNum(100));

// 3. see that a given arr of integers is sorted in ascending order 
function ascending(arr) {
    for (let i = 1; i <arr.length; i++) {
        if (arr[i]<arr[i-1]) {
            return false
        }
    }
    return true
}

console.log(ascending([1,2,3,48,325]));
console.log(ascending([1,2,3,48,325,0]));


// 4. write a js program to get the largest even numbers from an array of integers
function largestEvenNumInArr(arr){
    // let maxEven=-1
    // arr.forEach(el => {
    //     if (el%2===0) {
    //         if (el>maxEven) {
    //             maxEven=el
    //         }
    //     }
    // });
    // return maxEven
    return Math.max(...arr.filter(num=>num%2===0))
}
console.log(largestEvenNumInArr([1,3,1,4,10,9,100,0,2,45]));

// 5. write a js program to replace the first digit in a string (should contains at least digit) with $ character

const replaceFirstDigit=(str)=> str.replace(/[0-9]/,'$')

console.log(replaceFirstDigit('1Ah10ncx8'));
console.log(replaceFirstDigit('Ah80ncx8'));
console.log(replaceFirstDigit('Ahncx8'));
