import { Base } from "./Basehandler";
import { Request } from "./Request";
export class Application extends Base {
    public handle(request: string[]) {
      console.log("application");

      Request.message += request.shift();
      if (this.nextHandler) {
        this.nextHandler.handle(request);
      }
    }
    public handleDecode(request: string) {
      console.log("application");

      Request.decodeMessage.unshift(request.split(",")[0]);
      if (this.nextHandler) {
        this.nextHandler.handleDecode(request);
      }
    }
  }