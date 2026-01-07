

// function Tea(type){
//     this.type = type 
//     this.describe = function(){
//         return `this is a cup of ${this.type} `
//     }
// }
// let leamontea = new Tea("Leamod Tea")
// console.log(leamontea.describe())





function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type}`

    }
}
let MyownTea = new Tea("Green Tea");

console.log(MyownTea.describe())
