
document
.getElementById("HighLightFirstCity")
.addEventListener("click" , function () {
    let citieslist = document.getElementById("citiesList")
    citieslist.firstElementChild.classList.add("highLight");

})