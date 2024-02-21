const p1 = new Promise((reject)=>{
    setTimeout(()=>{
      console.log('Async operation 1...');
      reject('ghg');
    },2000);
});

const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Async operation 2...');
        resolve(2);
    },3000);
});
 
Promise.all([p1,p2])
 .then(result=> console.log(result))
 .catch(result=> console.log(result));