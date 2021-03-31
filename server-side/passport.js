// const express=require('express')
// const app=express()

// const passport=require('passport')
// const googlestrategy=require('passport-google-oauth2').Strategy


// passport.serializeUser(function(user,done){
//     done(null,user)
// })

// passport.deserializeUser(function(user,done){
//     done(null,user)
// })

// passport.use(new googlestrategy({
//     clientID: process.env.client_id,
//     clientSecret:process.env.client_secret,
//     callbackURL:process.env.google_callback,
//     passReqToCallback:true
// },function(request,accessToken,refreshToken,profile,done){
//       console.log(profile)
//       return done(null,profile)
// }
// ))

// app.get('/success',(req,res)=>{
//     res.render('pages/profile.ejs',{name:req.user.displayName,email:req.user.emails[0]})
// })



// module.exports=googlestrategy