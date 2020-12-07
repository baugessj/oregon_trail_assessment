class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt () {
        this.food += 2
    }   
    eat () {
        if (this.food == 0){
            this.isHealthy = false
        }
        if(this.food > 0){
        this.food--
        }
    }   
}



class Wagon{
    constructor (capacity){
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount (){
        let seatCount = this.capacity - this.passengers.length
        return seatCount
    }
    join (traveler){
        if (this.passengers.length < this.capacity){
            this.passengers.push(traveler)
        }
    }
    shouldQuarantine (){
        for(let i = 0; i < this.passengers.length; i++){
            if(this.passengers[i].isHealthy == true){
                
            }
            else{
                return true
            }
            
        }
        return false
    }
    totalFood (){
        let food = 0
        for (let i = 0; i < this.passengers.length; i++){
            food = this.passengers[i].food += food
            
        }
        return food
    }
}