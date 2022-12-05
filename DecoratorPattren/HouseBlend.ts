import { Beverage } from "./Bevrage";

export class HouseBlend extends Beverage {
    constructor(){
        super()
        this.desciption = "House Blend Coffee "
    }
    cost() {
        return 0.89
    }
    
}