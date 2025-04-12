import express from "express"
import Product from "../models/productModel.js"
import data from "../data.js"
import User from "../models/userModel.js"

const seedRouter = express.Router()

seedRouter.get('/', async (req, res) => {
    await Product.deleteMany({})
    const createProduct = await Product.insertMany(data.product)

    await User.deleteMany({})
    const createUser = await User.insertMany(data.user)
    res.send({ createUser, createProduct })
})

export default seedRouter;