
// use a for-of loop to iterate through the array ["chai","green tea","herbal tea","black tea"] and skip herbal tea store the other teas in array name preferredTeas


let teas = ["chai", "green tea" , "herbal tea","black tea"]
let preferredTeas = []

for(const tea of teas){
    if(tea === "herbal tea" || tea === "Herbal tea"){
        continue
    }
    preferredTeas.push(tea)
}
console.log(preferredTeas)
