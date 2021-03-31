const User=require('../../user/user')

const express=require('express')

const bcrypt=require('bcrypt')


const loginrouter=new express.Router()

require('../../database/mongoose')
const activity=require('../../user/activity')



loginrouter.post('/login',async (req,res)=>{
        const postuserpass=req.body.password
        console.log(postuserpass)
        console.log(req.body.email)

         console.log("enter")
        await User.findOne({email:req.body.email}).then((usermail)=>{
        if(usermail)
    
        {
            

            console.log("same mail")
           const compare=bcrypt.compareSync(postuserpass,usermail.password)

           if(compare)
            {
                console.log("same mail and same password")

                res.send({token:usermail._id,email:usermail.email,name:usermail.name})
            }
            else
            {
                console.log("wrong pass")
                res.send("incorrect password")
            }
        }
        else
        {
            console.log("no such mail")
            res.send("No such mail exists")
        }
    }) 
})
        
module.exports=loginrouter











// loginrouter.post('/login',async (req,res)=>{
//     // console.log("working",req.body)
//     await User.findOne({email:req.body.login.email}).then((usermail)=>{
//         if(usermail)
//         {
//             console.log(req.body.login.password)
//             console.log(usermail.password)
//             if(usermail.password===req.body.login.password)
//             {
//                 res.send({token:usermail._id,email:usermail.email,name:usermail.name})
//             }
//             else
//             {
//                 res.status(404).send()
//             }
//         }
//         else
//         {
//             res.status(404).send()
//         }
//     }) 
// })



