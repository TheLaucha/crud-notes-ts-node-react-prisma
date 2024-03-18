require("dotenv").config()
import express, { Request, Response } from "express"
import productRoutes from "./routes/productRoutes"
import userRoutes from "./routes/userRoutes"

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Hola mundos")
})

app.use(productRoutes)
app.use(userRoutes)

app.listen(port, () => {
  console.log(`Server listen on port ${port}`)
})
