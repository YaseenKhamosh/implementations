import { Base } from "./Basehandler";
import { Request } from "./Request";

export class Transport extends Base {
    public handle(request: string[]) {
      console.log("Transport");
  
      Request.message += "," + request.shift();
      if (this.nextHandler) {
        this.nextHandler.handle(request);
      }
    }
    public handleDecode(request: string) {
      console.log("Transport");
      Request.decodeMessage.unshift(request.split(",")[3]);
      if (this.nextHandler) {
        this.nextHandler.handleDecode(request);
      }
    }
  }
  