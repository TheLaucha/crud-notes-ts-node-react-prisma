require("dotenv").config()
let jwt = require("jsonwebtoken")
import express, { Request, Response } from "express"
import productRoutes from "./routes/productRoutes"
import userRoutes from "./routes/userRoutes"
import { verifyToken } from "./middlewares/verifyToken"

const app = express()
const port = process.env.PORT || 3001
const secret = process.env.SECRET

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Hola mundos")
})

app.use("/products", verifyToken, productRoutes)
app.use("/users", verifyToken, userRoutes)

// Ruta para generar un token JWT sin autenticación de usuario
app.post("/login", (req, res) => {
  // Generamos un token JWT sin información de usuario
  const token = jwt.sign({}, secret, { expiresIn: "30s" })
  res.status(200).json({ token })
})

app.listen(port, () => {
  console.log(`Server listen on port ${port}`)
})
