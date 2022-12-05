abstract class Component {
    protected parent!: Component | null;

    setParent(parent:Component | null){
        this.parent = parent
    }

    getParent():Component | null {
        return this.parent
    }


    add(component:Component):void{}


    remove(component:Component):void{}

    isComposit():boolean{
        return false;
    }

    public abstract operation():string
}


class Leaf extends Component {
    public operation(): string {
        return 'the Leaf'
    }
}

class Composite extends Component {
    protected children: Component[] = []

    public add(component: Component): void {
        this.children.push(component);
        component.setParent(this)
    }

    public remove(component: Component): void {
        const compoenntIndex = this.children.indexOf(component);
        this.children.splice(compoenntIndex, 1)
    }

    public isComposit(): boolean {
        return true;
    }
    public operation(): string {
        const results:any[] = [];
        for(const child of this.children){
            results.push(child.operation())
        }

        return `Branch(${results.join('+')})`;
    }
    
}


function clientCode(component: Component) {
    console.log(`RESULT: ${component.operation()}`);
}

const simple = new Leaf();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log('Client: Now I\'ve got a composite tree:');
clientCode(tree);
console.log('');
