const express = require('express');

const userRouter = express.Router();
const { createUser, deleteUser, getAllUsers, getSingleUser, updateUser }
= require("../controller/userController")

userRouter.post("/new-user", createUser)
userRouter.get("/all-users", getAllUsers)
userRouter.get("/get-one-user/:UserId", getSingleUser)
userRouter.delete("/delete-user/:UserId", deleteUser)
userRouter.patch("/update-user/:UserId", updateUser)



module.exports = userRouter
