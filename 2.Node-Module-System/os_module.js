const os=require('os');

var totalMemory= os.totalmem();
var freeMemory=os.freemem();

//return the total memory
console.log('Total Memory:'+`${totalMemory/1024/1024/1024}`);

//return the free memory
console.log('Free Memory:'+`${freeMemory/1024/1024/1024}`);

// return the cpu architecture
console.log("CPU architecture: " + os.arch());
