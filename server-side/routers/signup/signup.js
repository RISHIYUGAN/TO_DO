const User=require('../../user/user')

const activity=require('../../user/activity')

const bcrypt=require('bcrypt')

require('../../database/mongoose')

const nodemailer = require('nodemailer');


const express=require('express')
const e = require('express')

const signuprouter=new express.Router()

signuprouter.post('/signup',async (req,res)=>{
    console.log("signup")

    const userinfo=new User(req.body)
    const act=new activity(req.body)
   
    
    const username=req.body.name
    const preuserpass=req.body.password
    const preuseremail=req.body.email
    console.log(preuserpass)
    
    const hash=bcrypt.hashSync(preuserpass,9)
    
    const userhash=new User({
        name:username,
        email:preuseremail,
        password:hash
    })
    
    await User.findOne({email:req.body.email}).then((user)=>{
        if(user)
        {
            console.log('already')
              res.send("Email already exists")
        }
        else
        {
            userhash.save().then((user)=>{
                const token=user._id
               
                act.save().then(async (act)=>{
                    const actid=act._id
                    await activity.findOne({actid:actid}).then(async (ac)=>{
                            await activity.findByIdAndUpdate(actid,{token:token,date:"00-00-00"}).then(()=>{
                                res.send('sign in and activity updated')
                            })
                    })
                })
                
            })
  
  
        let mailTransporter = nodemailer.createTransport({
               service: 'gmail',
              auth: {
              user: 'parthivijay151@gmail.com',
              pass: '6382811325'
           }
        });
  
         let mailDetails = {
             from: 'parthivijay151@gmail.com',
             to: req.body.email,
            subject: 'Test mail',
            text: 'Hey ' + req.body.name + ' Nice to have you in TODO interface'
          };
  
         mailTransporter.sendMail(mailDetails, function(err, data) {
         if(err) 
         {
          console.log(err);
         } else 
         {
           console.log('Email sent successfully');
         }
      });
           
        }
    })  
})




module.exports=signuprouter










