import { Beverage } from "./Bevrage";
import { CondementDecorator } from "./CondementDecorator";

export class Mocha extends CondementDecorator {
    constructor(beverage:Beverage){
        super();
        this.beverage = beverage
    }
    getDescription(): string {
        return this.beverage.getDescription() + "Mocha ";
    }
    cost() {
        let oldCost =  this.beverage.cost();
        oldCost = oldCost + 0.20;
        return oldCost
    }
    
}