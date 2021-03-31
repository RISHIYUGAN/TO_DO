// const User=require('../../user/user')
// const activity=require('../../user/activity')
// const practise=require('../../user/practise')

// require('../../database/practise')

// const express=require('express')

// const practiserouter=new express.Router()

// practiserouter.post('/practise',(req,res)=>{
//     const pract=new practise(req.body)
//     pract.save().then(()=>{
//         res.send('Saved in data base')
//     })
// })
//alteration for save // insertmany
// signuprouter.post('/pract',async (req,res)=>{
//     await User.insertMany({
//            name:req.body.name,
//            email:req.body.email,
//            password:req.body.password
//     }).then(()=>{
//         res.send("updated")
//     })
// })


// module.exports=practiserouter


// // practiserouter.post('/signup',async (req,res)=>{
// //     const user1=new User(req.body)
// //     await User.findOne({email:req.body.email}).then((user)=>{
// //         if(user){
// //               res.status(404).send("Email already exists")
// //         }
// //         else{
// //             user1.save().then(()=>{
// //                 res.send('Updated')
// //             })
// //         }
// //     })   
// // })

// // practiserouter.post('/login',async (req,res)=>{
// //     await User.findOne({email:req.body.email},{password:req.body.password}).then((usermail)=>{
// //         if(usermail){
// //             const _id=usermail._id
// //             User.findById({_id:_id}).then(async ()=>{
// //                        await User.updateOne({token:usermail._id}).then(()=>{
// //                            res.send('token updated')
// //                        })
// //              })
// //         }
// //     })
// // })

// // practiserouter.post('/todo',async(req,res)=>{
// //     const act=new activity(req.body)
// //     act.save().then(()=>{
// //         res.send('empty activities created')
// //     })
// // })

// // practiserouter.post('/update_todo',async(req,res)=>{
// //     const user_id="601953aa4566a64c3c15aa9e"
// //     const _id="601d3aadb5ca4b4674cc1215"

// //         await activity.findOne({_id:_id}).then(async(use)=>{
// //             // await activity.updateMany({token:user_id,date:req.body.date})
// //             // await activity.updateMany({$push :{obj.dailyactivit:req.body.dailyactivity}})
// //             res.send('date and token  and daily activity updated')
// //             const dailyactivity=[]
// //             const obj={
// //                   date:req.body.date,
// //                   dailyactivity:dailyactivity
// //             }
// //             let obj2=use.activities[0]
// //             obj2.date=req.body.date
// //             obj2.dailyactivity=req.body.dailyactivity
// //             console.log(obj2)
            
// //             const query = { "activities.date": "03-02-2021" };
// //             const updateDocument = {
// //                $set: { "activities.$.dailyactivity": req.body.dailyactivity }
// //             };
// //            await activity.updateOne(query, updateDocument);

// //             // await activity.findOne({_id:_id}).then(async()=>{
// //             //     await activity.updateOne()
// //             //     res.send('updated')

// //             // })



// //             // await activity.updateMany({
                
// //             //     $push :{activities:obj}
// //             // })
// //             // const dt="03-02-2021"
// //             // console.log(use)
// //             // if(use.activities[0].date===dt)
// //             // {
// //             //     console.log(use.activities[0].dailyactivity)
// //             //     console.log(req.body.dailyactivity)
// //             //     console.log(use.activities[0].date)

                
// //             // }
// //             // await activity.updateMany({$push :{dailyactivity:req.body.dailyactivity},token:user_id,date:req.body.date})

            
// //          })
// // })

// // module.exports=practiserouter

// // {
// //     "name":"parthi",
// //     "email":"parthiv@gmail.com"
// //     "password":"parthiban"
// //   }


// // app.post('/pract1',async (req,res)=>{
// //     const username=req.body.name
// //     const preuserpass=req.body.password
// //     const preuseremail=req.body.email
// //     const hash=bcrypt.hashSync(preuserpass,9)
// //     const userhash=new User({
// //         name:username,
// //         email:preuseremail,
// //         password:hash
// //     })
// //     userhash.save().then(()=>{
// //         res.send('updated ')
// //     })
// // })
// // app.post('/pract2',async (req,res)=>{
// //     const postuserpass=req.body.password
// //     await User.findOne({email:req.body.email}).then((usermail)=>{
// //            if(usermail){
// //             const compare=bcrypt.compareSync(postuserpass,usermail.password)
// //             console.log(compare)
// //            }
// //     })
// // })