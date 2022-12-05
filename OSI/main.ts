import { Application } from "./Application";
import { Network } from "./Network";
import { Physical } from "./Physical";
import { Presentation } from "./Presentation";
import { Session } from "./Session";
import { Transport } from "./Transport";
import { DataLink } from "./DataLink";
import { Request } from "./Request";

 const encode = () => {
    const request = [
      "application",
      "presentation",
      "session",
      "transport",
      "network",
      "dataLink",
      "physical",
    ];
  
    const application = new Application();
    const presentation = new Presentation();
    const session = new Session();
    const transport = new Transport();
    const network = new Network();
    const dataLink = new DataLink();
    const physical = new Physical();
  
    application
      .setNext(presentation)
      .setNext(session)
      .setNext(transport)
      .setNext(network)
      .setNext(dataLink)
      .setNext(physical);
  
    application.handle(request);
    console.log(Request.message);
  };
  
 const decode = () => {
    const request =
      "application,presentation,session,transport,network,dataLink,physical";
    const application = new Application();
    const presentation = new Presentation();
    const session = new Session();
    const transport = new Transport();
    const network = new Network();
    const dataLink = new DataLink();
    const physical = new Physical();
  
    physical
      .setNext(dataLink)
      .setNext(network)
      .setNext(transport)
      .setNext(session)
      .setNext(presentation)
      .setNext(application);
  
    physical.handleDecode(request);
    console.log(Request.decodeMessage);
  };
  encode()
  decode()