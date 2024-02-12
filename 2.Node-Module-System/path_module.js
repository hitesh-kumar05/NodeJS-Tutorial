//we can use whose file which extension.txt,.jpg etc and fileformate name etc
const path=require('path');
//print the current path
console.log(path.dirname('D:/Project/node  js program/node module/PathModule/path.js'));
//print thr extension name
console.log(path.extname('D:/Project/node  js program/node module/PathModule/path.js'));
//print the file name
console.log(path.basename('D:/Project/node  js program/node module/PathModule/path.js'));
//print propeties architecture
console.log(path.parse('D:/Project/node  js program/node module/PathModule/path.js'));
//print individual propertis such as root,dir,base,ext,name etc value return.
const mypath=(path.parse('D:/Project/node  js program/node module/PathModule/path.js'));
console.log(mypath.root);
