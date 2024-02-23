const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground') //connect method return promises
.then(()=>console.log('Connect to mongodb'))
.catch(err=> console.error('Could not connect to mongodb',err));

const courseSchema= new mongoose.Schema({
  name:String,
  author:String,
  tags:[String],
  date:{type:Date,default:Date.now},
  isPublished:Boolean

});
// Classes,objects
//human,jhon
//course,nodecourse 
const Course=mongoose.model('Course',courseSchema);
async function createCourse(){
    const course=new Course({
        name:'Angular Course',
        author:'Hitesh',
        tags:['angular','frontend'],
        isPublished:true
        });
        
        const result= await course.save();
        console.log(result);
}
async function getCourses(){
    //eq(equal)
    //ne(not equal)
    //gt(greater than)
    //gte(greater than or equal to)
    //lt(less than)
    //in
    //nin(not in)
    const courses=await Course
    // .find({author:'Hitesh',isPublished:true})
    // .find({price:{$gt:10,$lt:20}})
    .find({price:{$in:[10,15,20]}})
    .limit(10)
    .sort({name:1})
    .select({name:1,tags:1});
    console.log(courses);
}
getCourses();