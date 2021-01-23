const express=require('express')
const cors=require('cors')
const app=express()
const User=require('./models/user')
require('../Database/mongoose')

app.use(express.json())
app.use(cors())




app.post('/login',async (req,res)=>{
    console.log("working",req.body)
    await User.findOne({email:req.body.login.email}).then((usermail)=>{
        if(usermail){
              User.findOne({password:req.body.login.password}).then((userpass)=>{
                if(userpass){
                    const id={token:userpass._id,email:req.body.login.email}
                    res.send(id)
                }
                else{
                    res.status(404).send()
                }
             })
        }
        else{
            res.status(404).send()
        }
    }) 
})



app.post('/signup',async (req,res)=>{
    const user1=new User(req.body.signup)
    // console.log(user)
    // console.log(req.body.signup)
    await User.findOne({email:req.body.signup.email}).then((user)=>{
        // console.log(req.body)
        if(user){
              res.status(404).send("Email already exists")
        }
        else{
            // console.log(user)
            user1.save(()=>{
                res.send('Updated')
           })
         }
    })   
})



app.post('/todo',(req,res)=>{
    const _id= req.body.token
    // console.log("id:",_id)
    User.findById({_id:_id}).then((use)=>{
        // console.log("use",use)
        res.send(use);
    })
})



app.post('/update_todo',(req,res)=>{
   const _id= req.body.token
   if(req.body){
       User.findById({_id:_id}).then(async (use)=>{
        //    console.log("test",req.body.todolist)
        //    console.log("testing",req.body)
           await User.updateOne({_id:_id},{todo:req.body.todolist})
            res.send('updated')
        })
   }
})


app.listen(3000,()=>{
    console.log('hey , port running successfully')
})

    







































































// const use=req.body.todolist;
    // console.log("test",_id)
    // console.log("testing",use)
    // await User.updateOne({_id:_id},{todo:use}).then(()=>{
    //   res.send('updated')
    //  })
    //  user.save().then(()=>{
    //      res.send(req.body)
    //  })

































































































































// const parthi={
//     todo:"testing"
// }
// console.log({todolist:parthi})
// console.log({todolist:parthi.todo})












































































// const express=require('express')
// const cors=require('cors')
// const app=express();
// app.use(cors())
// app.use(express.json())
// require('./mongoose')
// const User=require('./models')
// const port=process.env.PORT || 3000

// app.post('/todo',(req,res)=>{
//       const user=  new User(req.body)
//       user.save().then(()=>{
//           res.send(user)
//       })
// })

// app.listen(port,()=>{
//     console.log('port running successfully')
// })