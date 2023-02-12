
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
        console.log("name :"+ name)
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

const deleteCategory = async (req,res,next)=>{
    //return res.send(req.params.category)
    try{
     if(req.params.category !== "Choose category"){
        const categoryExists = await Category.findOne({name:decodeURIComponent (req.params.category)}).orFail()
        await categoryExists.remove()
        res.send ({message:"Category deleted"})
     }

    }catch(error){
        next(error)

    }
}
 
const saveAttr = async (req,res,next)=>{
  const { key,val, categoryChoosen} = req.body

if(!key || !val || !categoryChoosen){
    return res.status(400).send({message:"All inputs are required"})
}
try{
    const category = categoryChoosen.split("/")[0]
    const categoryExists = await Category.findOne({name:category}).orFail()
    if(categoryExists.attrs.length>0){
        // if key exists in the database then add a value to the key
        let keyDoesntExistInDatabase=true
        categoryExists.attrs.map((attr,idx)=>{
            if(attr.key===key){
                keyDoesntExistInDatabase =false
                let copyAttributeValues = [...categoryExists.attrs[idx].value]
                copyAttributeValues.push(val)
                let newAtrributeValues = [... new Set(copyAttributeValues)] // ı use set because I want to ensure one attr value is stored one time 
                categoryExists.attrs[idx].value = newAtrributeValues // I owerWrite to be ensure
            }
        })
        if (keyDoesntExistInDatabase){
            categoryExists.attrs.push({key:key, value : [val] })

        }
    }else{
        // push to the array
        categoryExists.attrs.push({key:key, value : [val] })
    }

    await categoryExists.save();
    let cat = await Category.find({}).sort({name:"asc"})
    return res.status(201).json({categoriesUpdated:cat})
}catch(error){
   next(error)
}
}
module.exports = {getCategories, postCategory,deleteCategory, saveAttr};


