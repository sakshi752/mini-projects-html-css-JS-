// write a js program to compare two objects to determine if the first one contains the same properties as the second one(which may also have additional properties)

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, d: 4 };

const objectsEqual=(a,b)=>{
   return Object.keys(a).every(key=>b[key])
}

console.log((objectsEqual(obj1,obj2)))
console.log((objectsEqual(obj1,obj3)))

// write a js program to convert a csv string to a 2D array. A new line indicated a new row in the array
const parseCSV=(csvStr)=>{
    return csvStr.split('\n').map(row=>row.split(','));
}

const str=`abc,def,ghi
1,4,2
true,nskan,false`

console.log(parseCSV(str));

// program to generate a random hexadecimal color code
const getRandomHexNumber=()=>{
    return Math.floor(Math.random()*16).toString(16)
}
const getHexString=()=>{
    let hexString='#'
    for(let i=0;i<6;i++){
        hexString=hexString+getRandomHexNumber()
    }
    return hexString
}

console.log(getHexString());