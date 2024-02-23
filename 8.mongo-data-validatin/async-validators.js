const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground') //connect method return promises
.then(()=>console.log('Connect to mongodb'))
.catch(err=> console.error('Could not connect to mongodb',err));

const courseSchema= new mongoose.Schema({
  name:{
    type:String,
    required:true,
    minlength:5,
    maxlength:255,
    //match: /pattern/
},
category:{
  type:String,
  required:true,
  enum:['web','mobile','network']
},
  author:String,
//   tags:{
//     type:Array,
//     //define async validator
//    validate:{ 
//          isAsync:true,
//         validator:function(v,callback) {
//         setTimeout(()=>{
//           //do some async work
//           const result= v && v.length > 0;
//           callback(result,'A course should have at least one tag.');
//         },1000);
//         } 
   
// }
//   },
tags: {
    type: Array,
    validate: {
    validator: async function (v) {
    return await checkTags(v);
    },
    message: "course shoud have at least one tag"
    }
    },

  date:{type:Date,default:Date.now},
  isPublished:Boolean,
  price:{
    type:Number,
    required:()=>{return this.isPublished; },
    min:10,
    max:200
  }
  
});   
async function checkTags(v) {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{  
          resolve(v && v.length > 0);        
      }, 3000);
    });
  }
const Course=mongoose.model('Course',courseSchema);
async function createCourse(){
    const course=new Course({
        name:'Angular Course',
        category:'web',
        author:'Hitesh',
        tags:[],
        isPublished:true,
        price:15
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
    const result=await Course.deleteMany({_id:id});
    const course=Course.findByIdAndDelete(id);
    console.log(course);
}
createCourse();
