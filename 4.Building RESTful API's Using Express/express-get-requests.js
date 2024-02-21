const express=require('express');
const app=express();

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
//how to create route sigle courses
app.get('/api/courses/:id',(req,res)=>{
      const course=courses.find(c=> c.id===parseInt(req.params.id));
      //use without arrow function
        //   const course=courses.find( function(c){
    //     return c.id===parseInt(req.params.id)
    //   });
      if(!course){
         res.status(404).send('The courses with the given ID was not found');
      }
      else{
        res.send(course);
      }

});

app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.query);
});
 
//port
const port=process.env.PORT|| 3000;
app.listen(port,()=> console.log(`listning on port ${port}....`));
