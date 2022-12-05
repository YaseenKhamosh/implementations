export interface IComponent {
    method():string
}

export class Component implements IComponent {
    method(): string {
     return "Method Component";
    }
    
}
export class Decorator implements IComponent {
    object: IComponent;

    constructor(object:IComponent){
        this.object = object;
    }
    method(): string {
        return 'the decorator method  is: ' + this.object.method()
    }
    
}

const component = new Component()


const decorator = new Decorator(component)

const decorator2 = new Decorator(decorator)

console.log('the decorator is: ', decorator2.method());
