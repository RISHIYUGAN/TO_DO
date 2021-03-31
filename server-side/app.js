// const passport=require('passport')
// const express=require('express')

// const cookie_session=require('cookie-session')

// require('dotenv').config()
// require('./passport')


// const app=express()
// app.use(express.json())

// app.use(passport.initialize())
// app.use(passport.session())

// app.use(cookie_session({
//     name:'TODO',
//     keys:['key1','key 2']
// }))


// // app.set('view engine',"ejs")

// app.get('/google',passport.authenticate('google',{scope:['profile','email']}))

// app.get('/google/callback',passport.authenticate('google',{failureRedirect:'/failed'})
// ,function(req,res){
//     res.redirect('/good')
// })

// app.get('/google/callback',passport.authenticate('google',{failureRedirect:'/failed'})
// ,function(req,res){
//     res.redirect('/good')
// })

// app.get('/parthiban/:age/:college',(req,res)=>{
//     res.send(req.params)
// })
// app.get('/parthi/:college',(req,res)=>{
//     const college={
//         name:'psg'
//     }
//     res.send(req.body.college)
// })


// // app.get('/',(req,res)=>{
// //     res.render("pages/index")
// // })

// app.listen(3000,()=>{
//     console.log('hey , port running successfully')
// })