import { CurrentConditionalDisplay } from "./CurrentConditionalDisplay";
import { WeatherData } from "./WeatherData";



let weatherData = new WeatherData()
let currentDispaly = new CurrentConditionalDisplay(weatherData);
weatherData.setMeasurements(80,30,40);
weatherData.setMeasurements(70,20,80);
weatherData.setMeasurements(10,50,20);





