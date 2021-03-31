const User=require('../../user/user')
const activity=require('../../user/activity')
require('../../database/mongoose')

const bcrypt=require('bcrypt')

const express=require('express')

const resetpasswordrouter=new express.Router()

resetpasswordrouter.post('/resetpassword',async(req,res)=>{
    const email=req.body.email
    const newpassword=req.body.password

    const newpasswordhash=bcrypt.hashSync(newpassword,9)
    
    console.log(newpasswordhash)

    await User.findOne({email:email}).then(async(use)=>{
            await User.updateOne({password:newpasswordhash}).then(()=>{
                res.send("New password updated")
            })

    })    

})

module.exports=resetpasswordrouter