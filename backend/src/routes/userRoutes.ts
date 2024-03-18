import express from "express"
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/userController"

const userRoutes = express.Router()

userRoutes.get("/users", getUsers)
userRoutes.get("/users/:id", getUserById)
userRoutes.post("/users", createUser)
userRoutes.patch("/users/:id", updateUser)
userRoutes.delete("/users/:id", deleteUser)

export default userRoutes
