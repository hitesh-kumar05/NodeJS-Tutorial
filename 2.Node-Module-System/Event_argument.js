//Event is signal that something has happened

//EventEmmiter is class which contain properties and method.
const EventEmitter=require('events');
//create an object 
const emitter=new EventEmitter();

//Register a listner
emitter.on('messageLogged',(arg) => {
    console.log('listner called',arg);
})
//listener is a function that we called when listener raised

//emit use making a noise,produce-signalling
//parameter paas to event name
emitter.emit('messageLogged',{id:1,url:'http://'});

//Raise:logging(data:message)