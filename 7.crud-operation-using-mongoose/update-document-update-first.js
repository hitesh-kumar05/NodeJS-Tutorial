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

    const pageNumber=1;
    const pageSize=10;

    const courses=await Course
    .find({author:'Hitesh',isPublished:true})
    .skip((pageNumber-1)*pageSize)
    .limit(pageSize)
    .sort({name:1})
    .select({name:1,tags:1});
    console.log(courses);
}

async function updateCourse(id){
    //2 approach update first
    //update directly
    //optional:get the updated document
   //we use update multiple id of data.
    const course=await Course.findByIdAndUpdate(id ,{
        $set:{
            author:'shubham',
            isPublished:true
        }
    });

  console.log(course);

}
updateCourse('65d702cf1954ef552abc5942');
