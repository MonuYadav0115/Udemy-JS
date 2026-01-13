
document
.getElementById("addNewIteam")
.addEventListener("click", function(){

    let newIteam = document.createElement("li")
    newIteam.textContent = "Egg"
    console.log(newIteam)
    document.getElementById("shopinglist").appendChild(newIteam)
})