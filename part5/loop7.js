
// 

let teas = ["Lemon tea" , "Masala tea" , "Green tea" , "chai" , "black tea", "white tea"]
let selectedtea = []

for(let i = 0; i < teas.length; i++){
    if(teas[i] === "chai"){
        break
    }
    let taketea = teas[i];
    selectedtea.push(taketea)
}
console.log(selectedtea)
