
// use a for -of loop to iterate through the array [1,2,3,4,5] and stop when the number 4 is found store the number before 4 in an array name smallNumber


let numbers = [1,2,3,4,5]
let smallNumber = []

for(const num of numbers){
    if(num === 4){
        break
    }
    smallNumber.push(num)
}
console.log(smallNumber)
