import { Base } from "./Basehandler";
import { Request } from "./Request";

export class Network extends Base {
    public handle(request: string[]) {
      console.log("Network");
  
      Request.message += "," + request.shift();
      if (this.nextHandler) {
        this.nextHandler.handle(request);
      }
    }
    public handleDecode(request: string) {
      console.log("Network");
      Request.decodeMessage.unshift(request.split(",")[4]);
      if (this.nextHandler) {
        this.nextHandler.handleDecode(request);
      }
    }
  }