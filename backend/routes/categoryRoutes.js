const express = require ("express")
const router = express.Router()
const {getCategories, postCategory,deleteCategory, saveAttr} = require ("../controllers/categoryController.js")



router.get("/", getCategories)
router.post("/", postCategory)
router.delete("/:category",deleteCategory)
router.post("/attr",saveAttr)

module.exports = router;