
function fetchdata(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            let success = false;
            if(success){
                resolve("Data fetch successfully ");
            } else {
                reject("Error fetching data")
            }
        } , 3000)
    })
}

fetchdata()
   .then((data) => console.log(data))
   .catch((error) => console.log(error))