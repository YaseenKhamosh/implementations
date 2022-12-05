import QuackBehavior from "./QuackBehavior";

class MuteQuack implements QuackBehavior {
    quack(): void {
        console.log('i Can not quack!!!!');
    }
}