import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        slug: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        brand: { type: String, required: true },
        catagory: { type: String, required: true },
        price: { type: String, required: true },
        countInStock: { type: String, required: true },
        rating: { type: String, required: true },
        numReviews: { type: String, required: true },
        discription: { type: String, required: true },
    },
    {
        timestamps: true,
    }
)

const Product = mongoose.model('Product', productSchema)

export default Product;