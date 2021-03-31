const User=require('../../user/user')

const activity=require('../../user/activity')

const nodemailer=require('nodemailer')

const bcrypt=require('bcrypt')

require('../../database/mongoose')

const express=require('express')

const deleterouter=new express.Router()

deleterouter.post('/delete',async(req,res)=>{

    await User.findOne({_id:req.body.token}).then(async(name)=>{
      const nam=name.name
      const email=name.email

      let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
       auth: {
       user: 'parthivijay151@gmail.com',
       pass: '6382811325'
    }
    });
    
    let mailDetails = {
      from: 'parthivijay151@gmail.com',
      to: email,
     subject: 'Test mail',
     text: 'oops ' + nam + ' We badly miss you ! '
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

      await User.deleteMany({_id:req.body.token}).then(async(name)=>{

        await activity.deleteMany({token:req.body.token}).then(()=>{
            res.send("deleted user info and also activity")
        })
     })
     

    })
    

})

module.exports=deleterouter

