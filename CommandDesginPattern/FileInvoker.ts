import { Command } from "./Command";

export class FileInvoker {
    command:Command;
    constructor(com:Command){
        this.command = com;
    }

    execute(){
        this.command.execute();
    }
}