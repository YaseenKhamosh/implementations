import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class WeatherData implements Subject{
    private observers: Array<Observer>;
    private temperature:number;
    private humidity:number;
    private pressure:number;

    public constructor(){
        this.observers = new Array<Observer>();

    }
    registerObserver(o: Observer): void {
        console.log('Added o is: ', o);
        
       this.observers.push(o);
    }
    removeObserver(o: Observer): void {
        console.log('log removed: ', o);
        
        let index = this.observers.indexOf(o,0);
        if(index > -1){
            this.observers.splice(index, 1);
        }
    }
    notifyObservers(): void {
        console.log('the data has changed... ');
        
        this.observers.forEach(element => {
            element.update(this.temperature, this.humidity,this.pressure);
        });
    }

    measurementsChanged(){
        this.notifyObservers();
    }

    setMeasurements(temperature:number, humidity:number, preasure:number){
        this.temperature = temperature;
        this.pressure = preasure;
        this.humidity = humidity;
        this.measurementsChanged();
    }


}