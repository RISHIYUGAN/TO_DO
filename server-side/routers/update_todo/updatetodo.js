const User=require('../../user/user')
const express=require('express')
const update_todorouter=new express.Router()
require('../../database/mongoose')
const activity=require('../../user/activity')


update_todorouter.post('/update_todo',async(req,res)=>{

       const token=req.body.token 
       const date=req.body.date
       const dailyactivity=req.body.dailyactivity

       try
       {
        const count=await activity.countDocuments({token:token,date:date})
        const wrongtoken=await activity.countDocuments({token:token})

       
        if(count===0)
        {
              await activity.insertMany({
                         date:req.body.date,  
                        token:req.body.token,
                        activities : req.body.dailyactivity
                           }).then(()=>{
                               res.send("updated for first time")
                           })
        }  
        
        if(count===1)
        {
              await activity.update({date:date,token:token},{$push :{activities:dailyactivity}}).then(()=>{
                         res.send("updated in old date")
                     })
        } 
        if(wrongtoken===1)
        {
            res.send("Token doesn't exists")
        }
        
       }

       catch(e)
       {
           res.status(404).send("oops ! something went wrong ")
       }
    
       
})
module.exports=update_todorouter

