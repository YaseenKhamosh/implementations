import { FileSystemReciver } from "./FileSystemReciver";

export class UnixFileSystemReciver implements FileSystemReciver {
    openFile(): void {
        console.log('Opening file in unix OS...');
    }
    wirteFile(): void {
        console.log('Writing file in Unix OS...');
    }
    colseFile(): void {
        console.log('Closing filein Unix OS...');
    }
}