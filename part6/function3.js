
// write a function named processTeaOrder that takes another function makeTea as a parameter and calls it with the argument 'earl gray'
// return the result of calling makeTea

function maketea(typeofTea){
    return `maketea: ${typeofTea}`;
}

function processTeaOrder (teaFunction){
   return teaFunction("earl grey");
}

let order = processTeaOrder(maketea);
console.log(order);
