import { FileSystemReciver } from "./FileSystemReciver";

export class WindowsFileSystemReciver implements FileSystemReciver {
    openFile(): void {
        console.log('Opening file from Windows OS');
    }
    wirteFile(): void {
        console.log("Writing File from Windows OS");
    }
    colseFile(): void {
        console.log('Closing File from Windows OS');
    }
}