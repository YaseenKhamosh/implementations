import { Beverage } from "./Bevrage";
import { CondementDecorator } from "./CondementDecorator";

export class Soy extends CondementDecorator {
    constructor(bevrage: Beverage){
        super()
        this.beverage = bevrage;
    }
    getDescription(): string {
        return this.beverage.getDescription() + 'Soy '
    }
    cost() {
        let oldCost = this.beverage.cost();
        oldCost = oldCost + 1.99;
        return oldCost;
    }
    
}