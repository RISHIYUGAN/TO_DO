const express=require('express')
const cors=require('cors')
const app=express()
const User=require('./models/user')
const port=process.env.PORT || 3000
app.use(express.json())
app.use(cors())
require('../Database/mongoose')

app.post('/todo-list',(req,res)=>{
    const user=new User(req.body.todo)
    res.send(user)
   
})
app.listen(port,()=>{
    console.log('hey , port running successfully')
})

















































































// const express=require('express')
// const cors=require('cors')
// const app=express();
// app.use(cors())
// app.use(express.json())
// require('./mongoose')
// const User=require('./models')
// const port=process.env.PORT || 3000

// app.post('/todo', async (req,res)=>{
//       const user= await new User(req.body)
//       user.save().then(()=>{
//           res.send(user)
//       })
// })

// app.listen(port,()=>{
//     console.log('port running successfully')
// })