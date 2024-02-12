const fs=require('fs');
//synchronus
//return the directory list means number of file with extension name.

// const files=fs.readdirSync('./');
// console.log(files);

//asynchronus
fs.readdir('./',function(error,files){
    if(error) console.log('Error get',error)
    else console.log('Result',files);
});


