
// write a function named `createTeaMaker` that returns another function the returned function should take one parametre `teaType` and return a message like 'making green tea' 
// store the returned function in a variable named `teaMaker` and call it with 'green tea'


// function createTeaMaker(){
//     return function(teaType){
//         return `Making ${teaType}`;
//     };
// }
// let teaMaker = createTeaMaker()
// let result = (teaMaker("green tea"))
// console.log(result)



//  addition parameter add 


function createTeaMaker(name){
    let score = 100
    return function (teaType){
        return `Making ${teaType} ${name} ${score}`
    }
}
let teaMaker = createTeaMaker("Monu yadav")
let result = teaMaker("Green tea")
console.log(result)
