
// write a for loop that iterates through the array [2,5,7,9] skip the value "7" and multiply the rest by 2 store the result in a new array doubledNumbers


// let number = [2,5,7,9]

// let doubledNumbers = []
// number.forEach(Element => {
//     if(Element === 7){
//         return;
//     }
//     doubledNumbers.push(Element*2)
    
// });
// console.log(doubledNumbers)


// 2  for loop 


let number = [2,5,7,9]

let doubledNumbers = []

for (let mynum= 0; mynum< number.length; mynum++) {
    if(number[mynum] === 7){
        continue;
    }
    doubledNumbers.push(number[mynum] * 2)
    
}

console.log(doubledNumbers)