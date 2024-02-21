//In this program first line execute program blocking secondline wait when first line executed.it is synchronus

 
console.log('Before');
setTimeout(()=>{
    console.log('Reading a user from a database...'); 
},2000);
console.log('After');