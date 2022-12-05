import { Duck } from "./Duck";
import { FlyBehavior } from "./FlyBehavior";
import QuackBehavior from "./QuackBehavior";

export class MallardDuck extends Duck {
    quackBehavior: QuackBehavior;
    flyBehavior: FlyBehavior;

    public display(): void {
        console.log('the MallardDuck is displaying...');
        
    }
    
}