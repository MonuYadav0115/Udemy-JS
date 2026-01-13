
function Drink(name){
    if(!new.target) {
        throw new Error("Drink must be called new keyword")
    }
    this.name = name;
}

let tea = new Drink("Tea ginger");
console.log(tea)
let coffee = new Drink("coffee")
console.log(coffee)
