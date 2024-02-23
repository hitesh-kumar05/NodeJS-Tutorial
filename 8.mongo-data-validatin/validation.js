const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground') //connect method return promises
.then(()=>console.log('Connect to mongodb'))
.catch(err=> console.error('Could not connect to mongodb',err));

const courseSchema= new mongoose.Schema({
  name:{type:String,required:true},
  author:String,
  tags:[String],
  date:{type:Date,default:Date.now},
  isPublished:Boolean

});
const Course=mongoose.model('Course',courseSchema);
async function createCourse(){
    const course=new Course({
        // name:'Angular Course',
        author:'Hitesh',
        tags:['angular','frontend'],
        isPublished:true
        });
        try{
            const result= await course.save();
            console.log(result);
 }
 catch(ex){
    console.log(ex.message);
 }
        
       
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
    const course=await Course.findByIdAndUpdate(id ,{
        $set:{
            author:'shubham',
            isPublished:true
        }
    });

  console.log(course);

}
async function removeCourse(id){
    //delete one
    // const result=await Course.deleteOne({_id:id});
    
    //delete many
    const result=await Course.deleteMany({_id:id});
    const course=Course.findByIdAndDelete(id);
    console.log(course);
}
createCourse();
