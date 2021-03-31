const mongoose=require('mongoose')

const Shema=mongoose.Schema

const userschema=new Shema({
    date:{
        type:String
    },
    activities:{
        type:Array,
        required:true
    },
    token:{
       type:String
    }
   
})

const mong=mongoose.model('activity',userschema)


console.log('user activity  is running')

module.exports=mong