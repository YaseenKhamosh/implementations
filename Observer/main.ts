export interface ISubject {
    subscript(observer:Observer)
    unsubscript(observer:Observer)
    notify()
}


export class Subject implements ISubject {
    private observer:Observer[] = []

    subscript(observer: Observer) {
        this.observer.push(observer)
    }
    unsubscript(observer: Observer) {
        this.observer = this.observer.filter(element =>{
            return observer.id == element.id
        })
    }
    notify() {
       for(const observer of this.observer){
        observer.update(this)
       }
    }

}

export class Observer implements IObserver {
    constructor(public readonly id:number){}
    update(){
        console.log('the observer id is: ', this.id);
    }
}




export interface IObserver{
    update():void
}


const firstObserver = new Observer(1);
const secondObserver = new Observer(2);



const subject = new Subject()

subject.subscript(firstObserver)
subject.subscript(secondObserver)
subject.notify()
subject.unsubscript(firstObserver)