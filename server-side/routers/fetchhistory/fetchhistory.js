const User=require('../../user/user')
const express=require('express')
const activity=require('../../user/activity')

const todorouter=new express.Router()
require('../../database/mongoose')

todorouter.post('/fetchhistory',async(req,res)=>{

    const {token,date}=req.body
         
    await activity.findOne({token:token,date:date}).then((us)=>{
        res.send(us.activities)
    })
})

module.exports=todorouter






