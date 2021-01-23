const mongoose=require('mongoose')
const Schema=mongoose.Schema
const bcrypt=require('bcrypt')

const validator=require('validator')

const UserSchema=new Schema({
    todo:{
        type:Array,
        trim:true
    },
 name:{
     type:String,
     trim:true
 },
 email:{
     type:String,
     trim:true,
     lowercase:true,
     validate(value){
         if(!validator.isEmail(value)){
             throw new Error('Not a valid mail')
         }
     }
 },
 password:{
     type:String,
     trim:true,
     validate(value){
         if(value.includes("PASSWORD")){
             throw new Error("Sorry please try another password")
         }
     }
 }
})

UserSchema.pre('save',async function(next){
    try{
          const salt=await bcrypt.genSalt(10)
          const hashpassword=await bcrypt.hash(this.password,salt)
          this.password=hashpassword
          next()
    }catch(e){
         next(e)
    }
})

const mong=mongoose.model('to-do',UserSchema)
module.exports=mong