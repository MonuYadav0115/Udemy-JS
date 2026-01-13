
// class method and inheritance


class Vehical {
    constructor(make,model){
        this.make = make 
        this.model = model
    }
    start () {
        return `${this.model} is come in market ${this.make}`

    }
}

// inheritance --> 

 class Car extends Vehical {
    drive(){
        return `${this.make} this is inheritance example`
    }
 }


 let mycar = new Car("Toyota" , "inova")

 console.log(mycar.drive())
 console.log(mycar.start())
 