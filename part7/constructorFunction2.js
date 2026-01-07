
function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function(){
    return `${this.species} make a sound`;
};


let dog = new Animal("Dog")
console.log(dog.sound())


let cat = new Animal("cat")
console.log(cat.sound())