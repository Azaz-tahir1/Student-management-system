const mongoose= require('mongoose')

const studentSchema= new mongoose.Schema({


    name:{
        type:String,
        required:true
    },


     rollNo:{
        type:String,
        required:true
    },


     course:{
        type:String,
        required:true
    },
    email:{
         type:String,
        required:true
    }


   
})


 const Student= mongoose.model('Student', studentSchema )


 module.exports=Student