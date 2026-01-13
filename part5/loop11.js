

// bookmark 15 minuts 52 lecture

// use a for-in loop to loop through an object containig city populations.
// stop the loop when the population of "Berlin" is found and store all previous cities populations in a new object named newcitypopulations.

let citiesPopulation = {
    London: 8900000,
    "New York": 8400000,
    Paris: 2200000,
    Berlin: 3500000
};

let NewcitiesPopulation ={}

for (const  cities in citiesPopulation) {
    if(cities === "Berlin"){
        break
    }
    NewcitiesPopulation[cities] = citiesPopulation[cities]
}
console.log(NewcitiesPopulation)