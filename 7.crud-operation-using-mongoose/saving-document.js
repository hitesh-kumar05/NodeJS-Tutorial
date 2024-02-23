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
        name:'Express Course',
        author:'Hitman',
        tags:['express','backend'],
        isPublished:false
        });
        
        const result= await course.save();
        console.log(result);
}
createCourse();