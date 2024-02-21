const debug=require('debug')('app:startup');
const config =require('config');
const morgan=require('morgan');
const helmet=require('helmet');
const Joi=require('joi');
const logger=require('./middleware/logger');
const courses=require('./routes/courses');
const home=require('./routes/home');
const express=require('express');
const app=express();

app.set('view engine','pug');
app.set('views','./views');//default


//piece of middleware it is request processes pipeline.
app.use(express.json());//req.body
app.use(express.urlencoded({extended:true}));// use passing incoming request with url encoded pair such as key=value&key=value
app.use(express.static('public'));
app.use(helmet());
//use the router
app.use('/api/courses',courses);
app.use('/',home);

//configuration
console.log('Application Name: '+ config.get('name'));
if(config.has('mail.host')){
    console.log('Mail Server: '+ config.get('mail.host'));
}
if(config.has('mail.password')){
    console.log('Mail Password' + config.get('mail.password'));
}

//set env and checka
if(app.get('env')==='development'){
app.use(morgan('tiny'));
debug('Morgan enabled');
}
app.use(logger);

//port
const port=process.env.PORT|| 3000;
app.listen(port,()=> console.log(`listning on port ${port}....`));
