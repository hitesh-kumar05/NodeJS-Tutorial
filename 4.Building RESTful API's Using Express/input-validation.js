const Joi=require('joi');
const express=require('express');
const app=express();
//piece of middleware it is request processes pipeline.
app.use(express.json());
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
 
//port
const port=process.env.PORT|| 3000;
app.listen(port,()=> console.log(`listning on port ${port}....`));
