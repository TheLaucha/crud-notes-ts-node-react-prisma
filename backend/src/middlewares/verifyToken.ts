import { Request, Response, NextFunction } from "express"

let jwt = require("jsonwebtoken")
const secret = process.env.SECRET

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  // El token viene en formato Bearer Lksdokedo -> Entonces lo divido en el espacio y selecciono la segunda parte.
  const token = req.headers.authorization?.split(" ")[1]
  if (!token) {
    return res.status(401).json({ message: "Missing token" })
  }
  try {
    jwt.verify(token, secret)
    next()
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" })
  }
}
