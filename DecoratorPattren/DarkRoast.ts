import { Beverage } from "./Bevrage";

export class DarkRoast extends Beverage {
    constructor(){
        super()
        this.desciption = "DarkRoast "
    }
    cost() {
       return 1.2;
    }
    
}