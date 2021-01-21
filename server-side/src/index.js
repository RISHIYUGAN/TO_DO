const express=require('express')
const cors=require('cors')
const app=express()
const User=require('./models/user')

app.use(express.json())
app.use(cors())
require('../Database/mongoose')







app.post('/todo-list',(req,res)=>{
   const _id= "60083ebd81a29639dc9e1fcb"
   if(req.body){
       User.findById({_id:_id}).then((use)=>{
            res.send(use)
            res.send('response reached')
       })
   }
    
    
    // const use=req.body.todolist;
    // console.log("test",_id)
    // console.log("testing",use)
    // await User.updateOne({_id:_id},{todo:use}).then(()=>{
    //   res.send('updated')
    //  })
    //  user.save().then(()=>{
    //      res.send(req.body)
    //  })
})

app.listen(3000,()=>{
    console.log('hey , port running successfully')
})

















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