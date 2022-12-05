import { FlyBehavior } from "./FlyBehavior";

class FlyWithWings implements FlyBehavior {
    public fly(): void {
        console.log('I can fly...');
    }
}

