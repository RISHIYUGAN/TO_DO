const express=require('express')

const app=express();

app.post('/hai',(req,res)=>{
    if(req.body==='hai'){
        res.send('hello')
    }
})
app.listen(3000,()=>{
    console.log('port running successfully')
})


