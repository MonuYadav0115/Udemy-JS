
// write a for loop that through the array ["London","NewYork","Paris","Berlin"] and skip the paris and store the other cities in new array named visitedcities:


let cityname = ["London","Newyork","Paris","Berlin"]

let visitedcities = []

for(let i = 0; i < cityname.length; i++){
    if(cityname[i] === "Paris"){
        continue;
    }
    const takecitie = cityname[i] 
    visitedcities.push(takecitie)
}

console.log(visitedcities)

