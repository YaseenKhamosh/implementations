import { Display } from "./Display";
import { Observer } from "./Observer";
import { WeatherData } from "./WeatherData";

export class CurrentConditionalDisplay implements Observer, Display{
    private temperature:number;
    private humidity:number;
    private weatherData:WeatherData;

    public constructor(weatherData:WeatherData){
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
        weatherData.removeObserver(this)
    }

    update(temp: any, humidity: any, preasure: any): void {
        this.humidity = humidity;
        this.temperature = temp;
        this.display();
    }
    display(): void {
        console.log("temp is: ",this.temperature, " humidity is: ", this.humidity);
    }

}