//callback is function when use the result our asynchronus function is ready
//Asynchronous
console.log('Before');
getUser(1,(user)=>{
    // console.log("User",user);
    getRepositories(user.gitHubUsername,(repos)=>{
        getCommits(repo,(commits)=>{
            //callback hell
          
        });
    });
});

console.log('After');

//Synchronous
console.log('Before');
const user=getUser(1);
const respos=getRepositories(user.gitHubUsername);
const commits=getCommits(respos[0]);
console.log('After');

function getUser(id,callback){
    setTimeout(() => {
        console.log('Reading a user from a database');
        callback({id:id,gitHubUsername:'hitesh'});
    }, 2000);
    }

function getRepositories(username,callback){
setTimeout(() => {
    console.log("calling github api");
    callback(['repo1','repo2','repo3']);
}, 2000);

}


