// square root of a number
function sqrt(num) {
    return Math.sqrt(num)
}

console.log(sqrt(100));

// area of triangle
function arOfTriangle(baseVal,htVal) {
    return (baseVal*htVal)/2
}
console.log(arOfTriangle(10,4));

// swap two numbers with temporary variables
function swapNumWithTemp(num1,num2) {
    let temp=num1
    num1=num2
    num2=temp
    return [num1,num2]
}

console.log(swapNumWithTemp(10,20));
console.log(swapNumWithTemp(10,230));

// swap two numbers without temporary variables
function swapNumWithoutTemp(num1,num2) {
    num1=num1+num2
    num2=num1-num2
    num1=num1-num2
    return [num1,num2]
}
console.log(swapNumWithTemp(10,230));

// check number is +ve, -ve or 0
function checkNum(num) {
    if (num > 0) {
        return 'Positive';
    } else if (num < 0) {
        return 'Negative';
    } else {
        return 'Zero';
    }
}

console.log(checkNum(5));    
console.log(checkNum(-3));  
console.log(checkNum(0)); 

// generate Random number val using Math.random()
const randomNum=()=>{
    return Math.floor(Math.random()*10)+1
}
console.log(randomNum());

// find factors value of a number
const findFactors = (num) => {
    const factors = [];
    for (let i = 1; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    // Include the number itself as a factor
    factors.push(num);
    return factors;
}
console.log(findFactors(12));

// find sum of natural num using recursion
const sumViaRecursion=(num)=>{
    if (num===1) {
        return 1
    }
    return num+sumViaRecursion(num-1)
} 

console.log(sumViaRecursion(5));