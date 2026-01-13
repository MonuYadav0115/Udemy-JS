// closer it a function function under function to return try to understand 

function outer (){
    let counter = 4
    return function(){
        counter++
        return counter
    }
}
let increament = outer()
console.log(increament())
console.log(increament())
console.log(increament())
console.log(increament())
