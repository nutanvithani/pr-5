const { Router } = require("express");
const { signup, deleteuser, getAllUsers, login } = require("../controllers/user.controler");

const userRoute = Router();

userRoute.post("/signup", signup)
userRoute.delete("/delete/:id", deleteuser)
userRoute.post("/login", login)
userRoute.get("/", getAllUsers)

module.exports = userRoute;