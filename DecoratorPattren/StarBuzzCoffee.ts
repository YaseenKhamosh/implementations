import { DarkRoast } from "./DarkRoast";
import { Espresso } from "./Espresso";
import { HouseBlend } from "./HouseBlend";
import { Mocha } from "./Mocha";
import { Soy } from "./Soy";
import { Whipe } from "./Whipe";


let espresso = new Espresso()
console.log(espresso.getDescription() + ' $' + espresso.cost());

let darkRoast = new DarkRoast();

darkRoast = new Mocha(darkRoast);
darkRoast = new Mocha(darkRoast);
darkRoast = new Whipe(darkRoast);

console.log(darkRoast.getDescription() + " $" + darkRoast.cost());


let houseBlend = new HouseBlend();
houseBlend = new Soy(houseBlend);
houseBlend = new Mocha(houseBlend);
houseBlend = new Whipe(houseBlend);
console.log(houseBlend.getDescription() + " $" + houseBlend.cost());