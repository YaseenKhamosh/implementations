import { Command } from "./Command";
import { FileSystemReciver } from "./FileSystemReciver";

export class CloseFileCommand implements Command {
    private fileSystemReciver:FileSystemReciver;
    constructor(fileSystemR:FileSystemReciver){
        this.fileSystemReciver = fileSystemR;
    }
    execute(): void {
      this.fileSystemReciver.colseFile();
    }
    
}