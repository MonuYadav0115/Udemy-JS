

// write a for loop that list all the cities in the array ["paris","nework","Tokyo","London"] and store each city in new array name citylist 


let cityname = ["Paris","nework","Tokyo","london"]

let citylist = []

for(let index = 0; index < cityname.length; index++){
    const newcity = cityname[index];
    citylist.unshift(newcity)

}

console.log(citylist)