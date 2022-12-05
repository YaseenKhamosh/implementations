import { Beverage } from "./Bevrage";

export class Espresso extends Beverage {
    constructor(){
        super()
        this.desciption = "Espresso ";
    }
    cost() {
        return 1.99;
    }
    
}