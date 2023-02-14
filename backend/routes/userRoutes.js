const express = require ("express")
const router = express.Router()
const {getUsers, registerUser} = require ("../controllers/userController.js")
const { route } = require("./categoryRoutes.js")



router.get("/", getUsers)
router.post("/register",registerUser)

// user logged in routes

//admin routes
module.exports = router;