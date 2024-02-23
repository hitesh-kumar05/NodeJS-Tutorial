// use to command import data another database
// mongoimport --db mongo-exercies --collection courses --file exercise-data.json --jsonArray
//mongoimoort "path which constain data in json format" -d database_name -c name_of_collection --file name_file_json  --jsonArray
const mongoose=require ('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');

const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:Date,
    isPublished:Boolean,
    price:Number
});

const Course=mongoose.model('Course',courseSchema);
async function getCourses(){
return await Course
.find({isPublished:true})
.or([
    {price:{$gte:15}},
     {name:/.*by.*/i}
])
.sort('-name')
.select('name author');

}
async function run(){
    const courses=await getCourses();
    console.log(courses);
}
run();
