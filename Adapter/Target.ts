class Target {
    public request():string {
        return ' The default target';
    }
}



class Adaptee {
    public spesificRequest():string {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee){
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const res = this.adaptee.spesificRequest().split('').reverse().join('');
        return 'Translated Adapter: ' + res
    }
}


function clientCode(target: Target){
    console.log('the target request: ', target.request());
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCode(target);

console.log('');

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.spesificRequest()}`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);