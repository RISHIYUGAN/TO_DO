const cors=require('cors')


const express=require('express')

const app=express()

const signuprouter=require('../server-side/routers/signup/signup')
const loginrouter=require('../server-side/routers/login/login')
const fetchhistoryrouter=require('../server-side/routers/fetchhistory/fetchhistory')
const update_todorouter=require('../server-side/routers/update_todo/updatetodo')
const resetpasswordrouter=require('../server-side/routers/resetpassword/resetpassword')
const deleterouter=require('../server-side/routers/delete/delete')


app.use(cors())
app.use(express.json())
app.use(signuprouter)
app.use(loginrouter)
app.use(fetchhistoryrouter)
app.use(update_todorouter)
app.use(resetpasswordrouter)
app.use(deleterouter)


app.listen(3000,()=>{
    console.log('hey , port running successfully')
})



    







































































// const use=req.body.todolist;
    // console.log("test",_id)
    // console.log("testing",use)
    // await User.updateOne({_id:_id},{todo:use}).then(()=>{
//  app.post('/update_todo',(req,res)=>{
    //  user.save().then(()=>{
    //      res.send(req.body)
    //  })
// })

// app.listen(3000,()=>{
//     console.log('hey , port running successfully')
// })

















































































































