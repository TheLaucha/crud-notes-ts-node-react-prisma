import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { Product } from "@prisma/client"
const prisma = new PrismaClient()

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products: Product[] = await prisma.product.findMany({})
    res.status(200).send(products)
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send({ message: error.message })
    } else {
      res.status(500).send("An unexpected error has ocucurred")
    }
  }
}

export const getProductById = async (req: Request, res: Response) => {
  try {
    let id = parseInt(req.params.id)
    const product = await prisma.product.findFirstOrThrow({
      where: {
        id: id,
      },
    })

    res.status(200).send(product)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ message: error.message })
    } else {
      res.status(500).send("An unexpected error has ocucurred")
    }
  }
}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body
    let newProduct = await prisma.product.create({
      data: product,
    })
    res.status(201).send(newProduct)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ message: error.message })
    } else {
      res.status(500).send("An unexpected error has ocucurred")
    }
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.id)
    const newData = req.body
    const updatedProduct = await prisma.product.update({
      where: {
        id: productId,
      },
      data: newData,
    })
    res.status(200).send(updatedProduct)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ message: error.message })
    } else {
      res.status(500).send("An unexpected error has ocucurred")
    }
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.id)
    const deletedProduct = await prisma.product.delete({
      where: {
        id: productId,
      },
    })
    res.status(200).send("Product deleted")
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ message: error.message })
    } else {
      res.status(500).send("An unexpected error has ocucurred")
    }
  }
}
