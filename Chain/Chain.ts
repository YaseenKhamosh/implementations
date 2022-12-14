interface Handler {
    setNext(handler:Handler):Handler;
    handle(request: string):string
}


abstract class AbstractHandler implements Handler{

    private nextHandler: Handler;


    setNext(handler: Handler): Handler {
       this.nextHandler = handler;
       return handler
    }


    handle(request: string): string {
       if(this.nextHandler){
        return this.nextHandler.handle(request)
       }
       return ''
    }
    
}

class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string {
        if(request === 'Banana'){
            return 'Moneky: I will eat the '+ request
        }
        return super.handle(request)
    }
}

class SquirrelHandler extends AbstractHandler{
    public handle(request: string): string {
        if(request === 'Nut'){
            return 'Squirrel: I will eat the ' + request
        }
        return super.handle(request)
    }
}


class DogHandler extends AbstractHandler {
    handle(request: string): string {
        if(request === 'MeatBall'){
            return 'Dog: I will eat: ' + request
        }
        return super.handle(request)
    }
}


function clientCode(handler: Handler) {
    const foods = ['Nut', 'Banana', 'Cup of coffee'];

    for (const food of foods) {
        console.log(`Client: Who wants a ${food}?`);

        const result = handler.handle(food);
        if (result) {
            console.log(`  ${result}`);
        } else {
            console.log(`  ${food} was left untouched.`);
        }
    }
}


const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

/**
 * The client should be able to send a request to any handler, not just the
 * first one in the chain.
 */
console.log('Chain: Monkey > Squirrel > Dog\n');
clientCode(monkey);
console.log('');

console.log('Subchain: Squirrel > Dog\n');
clientCode(squirrel);