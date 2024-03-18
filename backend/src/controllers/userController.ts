import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { User } from "@prisma/client"
const bcrypt = require("bcrypt")
const saltRounds = 10

const prisma = new PrismaClient()

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({})

    res.status(200).send(users)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ message: error.message })
    } else {
      res.status(500).send("An unexpected error has ocucurred")
    }
  }
}

export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id)
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    res.status(200).send(user)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ message: error.message })
    } else {
      res.status(500).send("An unexpected error has ocucurred")
    }
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, saltRounds)

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    })

    res.status(201).send(newUser)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ message: error.message })
    } else {
      res.status(500).send("An unexpected error has ocucurred")
    }
  }
}
export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id)
    const newData = req.body

    if (newData.password) {
      newData.password = await bcrypt.hash(newData.password, saltRounds)
    }

    const updateUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: newData,
    })

    res.status(200).send(updateUser)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ message: error.message })
    } else {
      res.status(500).send("An unexpected error has ocucurred")
    }
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id)
    const deletedUser = await prisma.user.delete({
      where: {
        id: userId,
      },
    })

    res.status(200).send("User deleted")
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ message: error.message })
    } else {
      res.status(500).send("An unexpected error has ocucurred")
    }
  }
}
