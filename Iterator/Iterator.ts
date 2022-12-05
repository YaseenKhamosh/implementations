interface Iterator<T>{
    current():T

    next():T

    key():number

    valied():boolean
    rewind():void


}


interface Aggregator {
    getIterator():Iterator<string>
}

class AlphabaticOrder implements Iterator<string> {

    private position:number = 0;
   private collection: WordCollection ;

   private revers:boolean = false;

   constructor(collection:WordCollection, revers:boolean = false){
    this.collection = collection
    this.revers = revers

   }


   public rewind(){
    this.position = this.revers ? this.collection.getCount() - 1 : 0; 
   }

   public current(): string {
       return this.collection.getItems()[this.position]
   }

   public key(): number {
       return this.position
   }

public next():string {
    const item = this.collection.getItems()[this.position];
    this.position += this.revers ? -1 : 1
    return item;
}

public valied(): boolean {
     if(this.revers){
        return this.position >= 0
     }
     
     return this.position < this.collection.getCount()
}
}

class WordCollection implements Aggregator {

    private items: string[] = []
    public getItems():string[]{
        return this.items
    }

    getCount():number{
        return this.items.length;

    }

    addItems(item:string):void {
        this.items.push(item);
    }


    getIterator(): Iterator<string> {
      return new AlphabaticOrder(this)
    }
    
}



