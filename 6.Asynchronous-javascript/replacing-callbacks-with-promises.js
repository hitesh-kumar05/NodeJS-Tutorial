//callback is function when use the result our asynchronus function is ready
//Asynchronous
console.log('Before');
getUser(1,(user)=>{
    // console.log("User",user);
    getRepositories(user.gitHubUsername,(repos)=>{
        getCommits(repo[0],(commits)=>{
            //callback hell
            console.log(commits);
          
        });
    });
});

console.log('After');


function getUser(id){
    return new Promise((resolve,reject)=>{
        //Kick off some async work
        setTimeout(() => {
            console.log('Reading a user from a database');
            resolve({id:id,gitHubUsername:'hitesh'});
        }, 2000);
    });
    
    }

function getRepositories(username){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("calling github api");
            resolve(['repo1','repo2','repo3']);
        }, 2000);
    })
}

function getCommits(repo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Calling Github API...');
            resolve(['commit']);
        },2000);
    })
}


