import { Base } from "./Basehandler";
import { Request } from "./Request";

export class Physical extends Base {
    public handle(request: string[]) {
      console.log("Physical");
  
      Request.message += "," + request.shift();
      if (this.nextHandler) {
        this.nextHandler.handle(request);
      }
    }
  
    public handleDecode(request: string) {
      console.log("Physical");
      Request.decodeMessage.unshift(request.split(",")[6]);
      if (this.nextHandler) {
        this.nextHandler.handleDecode(request);
      }
    }
  }