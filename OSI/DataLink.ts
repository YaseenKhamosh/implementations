import { Base } from "./Basehandler";
import { Request } from './Request'

export class DataLink extends Base {
    public handle(request: string[]) {
      console.log("data link");
  
      Request.message += "," + request.shift();
      if (this.nextHandler) {
        this.nextHandler.handle(request);
      }
    }
    public handleDecode(request: string) {
      console.log("data link");
      Request.decodeMessage.unshift(request.split(",")[5]);
      if (this.nextHandler) {
        this.nextHandler.handleDecode(request);
      }
    }
  }