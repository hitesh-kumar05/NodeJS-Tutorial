
//already resolved
const p = Promise.resolve({id:1});
p.then(result => console.log(result));

//already rejected

const p1= Promise.reject('reason for rejection...');
p1.catch(error=>console.log(error));
 