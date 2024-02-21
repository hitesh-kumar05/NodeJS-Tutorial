const morgan=require('morgan');
const helmet=require('helmet');
const Joi=require('joi');
const logger=require('./middleware/logger');
const express=require('express');
const app=express();


//piece of middleware it is request processes pipeline.
app.use(express.json());//req.body
app.use(express.urlencoded({extended:true}));// use passing incoming request with url encoded pair such as key=value&key=value
app.use(express.static('public'));
app.use(helmet());

if(app.get('env')==='development'){
app.use(morgan('tiny'));
console.log('Morgan enabled');
}
app.use(logger);

const courses = [
    {id: 1, name: 'MCA'},
    {id: 2, name: 'MSc'},
    {id: 3, name: 'Bsc'},
    {id: 4, name: 'course1'},
       
];
app.get('/',(req,res)=>{
    res.send('hello world');
});
app.get('/api/courses',(req,res)=>{
    res.send(courses);
});

app.post('/api/courses',(req,res)=>{
    const schema=Joi.object({
        name: Joi.string().min(3).required()
    });
    const result= schema.validate(req.body);
    if(result.error){
        //400 is Bad request
        console.log(result.error)
        res.status(400).send(result.error.details[0].message);
        return;
    }
const course={
    id: courses.length+1,
    name:req.body.name
};
courses.push(course);
res.send(course);
});


app.put('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=> c.id===parseInt(req.params.id));
       //if not existing,return 404
     if(!course) return res.status(404).send('The courses with the given ID was not found');
     
     //use validation 
     const {error}=validateCourse(req.body);//result.error
    //if invalid,return 400-Bad request
    if(error)return res.status(400).send(result.error.details[0].message);
    
     //Update course
     course.name=req.body.name; 
    // Return the updated course
    res.send(course);
});
app.delete('/api/courses/:id',(req,res)=>{
   
    //not existing,return 404
    //delete
    //return the same courses
    //follow the all command

     //lookup the course
  const course=courses.find(c=> c.id===parseInt(req.params.id));
     //if not existing,return 404
   if(!course) return res.status(404).send('The courses with the given ID was not found');
   
   //delete
   const index=courses.indexOf(course);
   courses.splice(index,1);
   //return the same course
   res.send(course); 

})


function validateCourse(course){
    //validate
    const schema=Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course);
}
 
//port
const port=process.env.PORT|| 3000;
app.listen(port,()=> console.log(`listning on port ${port}....`));
