const Category = require("../models/CategoryModel")


const getCategories = async (req,res,next)=>{
 
   try{

    //{} ı can define which category ı will get from database
    //sort categories in "asc" order
        const categories = await Category.find({}).sort({name:"asc"}).orFail()
        res.json(categories)
   }catch(error){
    // I copied error handler from expressJS web page
    next(error)
   }
}


const postCategory = async (req,res,next) =>{
    try{
        const {name} = req.body
        if(!name){
            res.status(400).send({message:"category name is required"})
        }
           
        const categoryExists = await Category.findOne({name: req.body.name})
        if(categoryExists){
            res.status(400).send("category already exist")
        }else{
            const createCategory = new Category({name:req.body.name})
            createCategory.save();
            res.status(201).send({createCategory : createCategory})
        }
        
    }catch(error){
        next(error)
    }
}


module.exports = {getCategories, postCategory};


