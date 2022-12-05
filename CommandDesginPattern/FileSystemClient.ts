import { FileSystemReciverUtil } from "./FileSystemReciverUtil";
import { FileSystemReciver } from './FileSystemReciver'
import { OpenFileCommand } from "./OpenFileCommand";
import { FileInvoker } from "./FileInvoker";
import { WriteFileCommand } from "./WirteFileCommand";
import { CloseFileCommand } from "./CloseFileCommand";



// reciver obj
let fileSystemR:FileSystemReciver = FileSystemReciverUtil.getUnderlyingFileSystem();

// revier command
let openFileCommand:OpenFileCommand = new OpenFileCommand(fileSystemR);
console.log('the open command: ', openFileCommand);
openFileCommand.execute()
// creating invoker and associating with command
// let fileInvoker:FileInvoker = new FileInvoker(openFileCommand);

// perform action on invoker object
// fileInvoker.execute();


// for writing
let writeCommand:WriteFileCommand = new WriteFileCommand(fileSystemR);
console.log('the write command: ', writeCommand);

writeCommand.execute()
// fileInvoker =  new FileInvoker(writeCommand);
// fileInvoker.execute()


// for closing
let closeCommand:CloseFileCommand = new CloseFileCommand(fileSystemR);
console.log('the close command: ', closeCommand);
closeCommand.execute()
// fileInvoker = new FileInvoker(closeCommand);
// fileInvoker.execute()