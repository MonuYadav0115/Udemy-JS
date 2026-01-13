
// write a forEach loop that iterate through the array ["Berlin" , "Tokyo" , "Sydeny" , "Paris"] skip "sydney" and store the other cities in a new array named traveledCities.


// let cityname = ["Berlin", "Tokyo" , "Sydney" , "Paris"]

// let traveledCities = []

// cityname.forEach(function (city){
//     if(city === "Sydney"){
//         return;
//     }
//     traveledCities.push(city)
// });

// console.log(traveledCities)


// 2 without function:


let cityname = ["Berlin", "Tokyo" , "Sydney" , "Paris"]

let traveledCities = []

cityname.forEach(city => {
    if(city === "Sydney"){
        return;
    }
    traveledCities.push(city)
    
});
console.log(traveledCities)
