import { FlyBehavior } from "./FlyBehavior";

class FlyNoWay implements FlyBehavior {
    fly(): void {
        console.log('I can not fly...');
    }
}