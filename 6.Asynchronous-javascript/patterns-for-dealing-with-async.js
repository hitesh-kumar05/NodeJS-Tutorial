console.log('Before');
const user=getUser(1);
console.log(user);
console.log('After');

function getUser(id){
    setTimeout(()=>{
        console.log('Reading a user from a database...');
        return {id:id,gitHubUsername:"hitesh"};
    },2000);
    return 2;
}


