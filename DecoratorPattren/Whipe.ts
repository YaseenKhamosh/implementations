import { Beverage } from "./Bevrage";
import { CondementDecorator } from "./CondementDecorator";

export class Whipe extends CondementDecorator {
    constructor(beverage:Beverage){
        super();
        this.beverage = beverage;
    }
    getDescription(): string {
       return this.beverage.getDescription() + "Whipe"
    }
    cost() {
        let oldCost = this.beverage.cost();
        oldCost = oldCost + 2.1;
        return oldCost
    }
    
}