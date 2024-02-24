function getFileExtention(filename){
    var extention = filename.split('.').pop();
    console.log(extention);
}

getFileExtention('abc.txt');
getFileExtention('abc.pdf');