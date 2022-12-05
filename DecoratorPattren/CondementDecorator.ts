import { Beverage } from "./Bevrage";

export abstract class CondementDecorator extends Beverage {
   beverage:Beverage;
   abstract getDescription(): string;
}