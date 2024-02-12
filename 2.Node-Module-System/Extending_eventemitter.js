const EventEmitter=require('events');

var url='http://mylogger.io/log';

class Logger extends EventEmitter{
     log(message){
        console.log(message);
        //Raise an event
        this.emit('messageLogged',{id:1,url:'http://'});
        console.log('print after Logger class');
    }
    

}
module.exports=Logger;