const mongoose=require('mongoose')

const validator=require('validator')
const mong=mongoose.model('to-do',{
    todo:{
        type:String,
        trim:true
    }
    // name:{
    //     type:String,
    //     trim:true
    // },
    // email:{
    //     type:String,
    //     trim:true,
    //     validate(value){
    //         if(!validator.isEmail(value)){
    //             throw new Error('Not a valid mail')
    //         }
    //     }
    // },
    // password:{
    //     type:String,
    //     trim:true,
    //     minlength:4,
    //     validate(value){
    //         if(value.includes("PASSWORD")){
    //             throw new Error("Sorry please try another password")
    //         }
    //     }
    // }
})
module.exports=mong