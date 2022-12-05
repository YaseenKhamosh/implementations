export abstract class Beverage {
    desciption:string = 'Un known beverage';
    
    getDescription(){
        return this.desciption;
    }
    abstract cost()
}