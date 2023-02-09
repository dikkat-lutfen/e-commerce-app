const express = require ("express")
const router = express.Router()
const {getCategories, postCategory} = require ("../controllers/categoryController.js")



router.get("/", getCategories)
router.post("/", postCategory)

module.exports = router;