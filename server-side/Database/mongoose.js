const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/TODO',{
    useUnifiedTopology : true,
   useNewUrlParser : true,
   useCreateIndex:true
},()=>{
    console.log('hey , Database connected successfully')
})
module.exports=mongoose