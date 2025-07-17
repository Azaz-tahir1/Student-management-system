const express=require('express')
const router=express.Router()
const Student=require('../models/schema')

//read all
router.get('/',  async (req,res)=>{

    try{
const allStudents= await  Student.find()
res.json(allStudents)
    }

    catch(err){
        res.status(500).json({message:err.message})
    }

})


//read one
router.get('/:id',  async (req,res)=>{

    try{
const readOne= await  Student.findById(req.params.id)
if(!readOne) return res.status(404).json({message:'sorry we did not find any  student of this id'})
res.json(readOne)

    }

    catch(err){
        res.status(500).json({message:err.message})
    }

})






//create
router.post('/',  async (req,res)=>{

    try{
const createOne= await  Student.create(req.body)
res.json(createOne)

    }

    catch(err){
        res.status(500).json({message:err.message})
    }

})





//update one
router.put('/:id',  async (req,res)=>{

    try{
const UpdateOne= await  Student.findByIdAndUpdate(req.params.id, req.body,  {new:true})
if(!UpdateOne) return res.status(404).json({message:'sorry we did not find any  student of this id so we could not change'})
res.json(UpdateOne)

    }

    catch(err){
        res.status(500).json({message:err.message})
    }

})



//delete one
router.delete('/:id',  async (req,res)=>{

    try{
const delOne= await  Student.findByIdAndDelete(req.params.id)
if(!delOne) return res.status(404).json({message:'sorry we did not find any  student of this id so we could not change'})
res.json({message:'student has been deleted'})

    }

    catch(err){
        res.status(500).json({message:err.message})
    }

})

module.exports=router

