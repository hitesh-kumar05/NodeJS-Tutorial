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
    //1 approach:Query first
    //findbyId()
    //modify its properties
    //save()

    //2 approach update first
    //update directly
    //optionallu:get the updated document

    //1
    const course=await Course.findById(id);
    if(!course)return ;

    course.isPublished=true;
    course.author='Another Author';
    //or another way
    // course.set({
    //     isPublished:true,
    //     author:'Authoer Author'
    // });
    
  const result =  await course.save();
  console.log(result);

}
updateCourse('65d702cf1954ef552abc5942');
