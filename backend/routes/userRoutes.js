const express = require ("express")
const router = express.Router()
const {getUsers, registerUser, loginUser} = require ("../controllers/userController.js")
/* const { route } = require("./categoryRoutes.js") */




router.post("/register",registerUser)
router.post("/login", loginUser)

// user logged in routes

//admin routes
router.get("/", getUsers)

module.exports = router;