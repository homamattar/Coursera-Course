// Global Variables to use.
var destFolder, sourceFolder, files, fileType, sourceDoc, svgSaveOpts, doc, layers;

// The folder where all of the Illustrator files are.
sourceFolder = Folder.selectDialog( 'Select the folder with Illustrator files you want to convert to SVG', '~' );

// Function that sets up the exporting process
function init(){

  // Check to see if sourceFolder has any files in it
  if(sourceFolder != null){
    
    // Create new array for files to be stored
    files =  new Array();

    // Only use file types that are illustrator files
    fileType = "*.ai";

    // Files get save with all of the files in the sourceFolder
    files = sourceFolder.getFiles(fileType);

    // Check to see if there are any files in the folder
    if(files.length > 0){

      // Ask for a destination folder
      destFolder = Folder.selectDialog('Select the folder you want to export files to', '~');

      // Loop through files
      for(var i = 0; i < files.length; i++){

        // Save the open file and properties to sourceDoc
        sourceDoc = app.open(files[i])

        doc = app.activeDocument;

        hideAllLayers();
        exportLayers();
        sourceDoc.close(SaveOptions.DONOTSAVECHANGES);
      }
    } else {
      alert('There is nothing here')
    }


  } else {
    alert('There are no files here')
  }

}