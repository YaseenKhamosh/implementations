import  FlyBehavior  from "./FlyBehavior";
import  QuackBehavior  from "./QuackBehavior";

export abstract class Duck {

    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;

    public Duck(){
    }

    public abstract display():void;

    public performFly():void{
        console.log('on fly');
        this.flyBehavior.fly();
        
    }

    public perFormQuack():void{
        console.log('one quack');
        // this.quackBehavior.quack();
        
    }

    public swim():void{
        console.log('I can swim!!!');
    }
}
