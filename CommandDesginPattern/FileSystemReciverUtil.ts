import { FileSystemReciver } from "./FileSystemReciver";
import { UnixFileSystemReciver } from "./UnixFilsSystemReciver";
import { WindowsFileSystemReciver } from "./WindowsFileSystemReciver";

export class FileSystemReciverUtil {

    static getUnderlyingFileSystem():FileSystemReciver{
        let osName = 'Mac';
        if(osName == 'Mac'){
            return new UnixFileSystemReciver()
        }else{
            return new WindowsFileSystemReciver()
        }
    }
}