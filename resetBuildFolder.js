const fs = require("fs");
const path = require("path");

const rootFolderPath = "./build"; // Change this to the path of your root folder
const foldersToKeep = ["assets"]; // Add folders you want to keep here

function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // if directory
        deleteFolderRecursive(curPath); // recursively delete subfolders
      } else {
        // delete file
        console.log("delete file", curPath);
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath); // delete empty directory
  }
}

function isFolderToKeep(folderName) {
  return foldersToKeep.includes(folderName);
}

function isFileInRootFolder(filePath) {
  const rootFolder = path.resolve(rootFolderPath);
  const resolvedFilePath = path.resolve(filePath);
  return (
    !fs.lstatSync(filePath).isDirectory() &&
    resolvedFilePath.startsWith(rootFolder)
  );
}

function deleteFilesOutsideRoot(rootFolderPath) {
  fs.readdirSync(rootFolderPath).forEach((file) => {
    // console.log("file", file);
    const filePath = path.join(rootFolderPath, file);
    if (!isFolderToKeep(file) && !isFileInRootFolder(filePath)) {
      console.log("deleted folders", filePath);
      deleteFolderRecursive(filePath);
    }
  });
}

deleteFilesOutsideRoot(rootFolderPath);
