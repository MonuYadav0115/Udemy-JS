
// New loop start forEach loop time: 28 minuts lect:52 

// write a forEach loop that iterates through the array ["earl gray" , "green tea" , "chai" , "oolong tea"] stop the loop when "chai " is found store all previous tea type in an array name availableteas

// note : remember the concept in for loop under apply function method ex: --> function(){} 



let alltea = ["earl gray" , "green tea" , "chai" , "oolaong tea"];

let availableteas = [];

alltea.forEach(function(tea){
    if(tea === "chai" ){
        return;
    } 
    availableteas.push(tea)
});
console.log(availableteas)
