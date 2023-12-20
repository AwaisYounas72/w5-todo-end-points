import express from "express";
const router = express.Router();
import Todo from '../Model/Todo.model.js'

// Create Todo
router.post("/add-Todo",async(req,res)=>{
    try {
        const{title,description} = req.body;
        if(!title || !description){
            res.status(400).json({
                msg:"Please enter the correct in[ut"
            })
        }
        const todo = await Todo.create({
            title:title,
            description:description
        }) 
        res.status(201).json({
            todo
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
})

// Get All Todo
router.get("/get-all-Todo",async(req,res)=>{
    try {
        
        const todo = await Todo.find({})
        res.status(201).json({
            todo
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
})

// Update Todo
router.put("/update-Todo/:id",async(req,res)=>{
    try {
        const id = req.params.id
        const{title,description,hasCompleted} = req.body;
        const todo = await Todo.findByIdAndUpdate(id,{title,description,hasCompleted})
        res.status(201).json({
            todo
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
})

// Delete Todo
router.delete("/delete-Todo/:id",async(req,res)=>{
    try {
        const id = req.params.id
        const todo = await Todo.findByIdAndDelete(id)
        res.status(201).json({
            msg:"Todo Deleted Successfully",
            todo
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
})

export default router;