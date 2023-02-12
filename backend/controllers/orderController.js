const getOrders = (req,res)=>{
 
    res.send("handling  order rotes, e.g. search for orders")
}

module.exports = getOrders;

/* 
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
    /* let cat = await Category.find({}).sort({name:"asc"}) 
    return res.status(201).send({message:"category updated"})
}catch(error){
   next(error)
}
}
module.exports = {getCategories, postCategory,deleteCategory, saveAttr};

*/
