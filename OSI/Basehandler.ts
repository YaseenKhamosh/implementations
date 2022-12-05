import { IHandler } from "./Handler";

export class Base implements IHandler {
    protected nextHandler: IHandler;
    message: string = "";
    requestType: string;
  
    public setNext(handler: IHandler): IHandler {
      this.nextHandler = handler;
      return handler;
    }
  
    handle(request: string[]) {
      throw new Error("Method not implemented.");
    }
    handleDecode(request: string) {
      throw new Error("Method not implemented.");
    }
  }