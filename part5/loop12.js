
// used a for-in loop to loop through an object containig city populations
// skip any city with a population below 3 million and store the rest in a new object named "largeCities"

let worldCities = {
    "Sydeney" : 5000000,
    "Tokyo" : 9000000,
    "Berlin" : 35000000,
    "Paris" : 22000000
};

let largeCities = {}

for (const cities in worldCities) {
    if(worldCities[cities] < 3000000 ){
        continue
    }
    largeCities[cities] = worldCities[cities]
    
    
}
console.log(largeCities)