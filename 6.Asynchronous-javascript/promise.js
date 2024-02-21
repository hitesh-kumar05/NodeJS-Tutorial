//promise an object that holds the eventual result of an asynchronous operation.
const p = new Promise((resolve,reject)=>{
 //kich off some sync work
 //we can use access database,call a webservice,start a timeout.
 setTimeout(()=>{
    // resolve(1);   //pending => resolved,fulfilled
     reject(new Error('message')); //pending=> rejected
 },2000);
 
   
});

p
  .then(result=> console.log('result',result)) //resolve
  .catch(err => console.log('Error',err.message));//reject