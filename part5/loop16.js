
// use a for-of loop to iterate through the array ["chai","green tea",black tea, "jasmine tea",herbal tea] and stopt when the length of current tea name is greater than 10 store the teas iterated over in array name shortTeas


let teaname = ["chai" , "green tea" , "black tea" , "jasmine tea" , "herbal tea"]

let shortTeas = []

for (const tea of teaname) {
    if(tea.length > 10){
        break;
    }
    shortTeas.push(tea)
}
console.log(shortTeas)

