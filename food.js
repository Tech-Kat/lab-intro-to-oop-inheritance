// Create class below
class Food {
    constructor(name, daysToSpoil, fresh = true){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh
    }

prepare() {
    console.log(`${this.name} is being prepared`)
}

isFresh(){
    if(this.daysToSpoil > 0){
        this.fresh === true;
        console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
    } else {
        console.log(`${this.name} has spoiled.`)
    }
}

aDayPasses() {
    this.daysToSpoil -= 1;
    this.isFresh();
}

}

// Do not edit below this line
module.exports = Food;
