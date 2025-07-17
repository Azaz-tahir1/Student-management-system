const mongoose=require('mongoose')
const express=require('express')
const dotenv=require('dotenv')

dotenv.config()


const DB= ()=>{mongoose.connect('mongodb://localhost:27017/student-record')
.then( ()=>{  console.log('successfully connected') } )
.catch(err => console.log(err) )


}
module.exports=DB


