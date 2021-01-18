const express=require('express')
const cors=require('cors')


const app=express();
app.use(cors())

app.post('/hai',(req,res)=>{
    console.log(req.body)
    if(req.body==='hai'){
        res.send('hello')
    }
})

app.listen(3000,()=>{
    console.log('port running successfully')
})