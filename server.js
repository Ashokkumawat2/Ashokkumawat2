const express=require('express')
const app=express()
require('dotenv').config()
const adminRouter=require('./router/adminrouter')
const userRouter=require('./router/userrouter')
app.use(express.urlencoded({extended:false}))
const mongoose=require('mongoose')
const session=require('express-session')
mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)






app.use(session({
    secret:process.env.SECRECT_KEY,
    resave:false,
    saveUninitialized:false
}))
app.use(userRouter)
app.use( '/admin',adminRouter)
app.use(express.static('public'))
app.set('view engine','ejs')
app.listen(process.env.PORT,()=>{console.log(`server is running port ${process.env.PORT}`)})