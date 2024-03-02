require("dotenv").config()
import express, { Request, Response } from "express"

const app = express()
const port = process.env.PORT || 3001

app.get("/", (req: Request, res: Response) => {
  res.send("Hola mundos")
})

app.listen(port, () => {
  console.log(`Server listen on port ${port}`)
})
