import bcrypt from 'bcryptjs'

const data = {
    user: [
        {
            name: "kshitij Sharma",
            email:"admin@example.com",
            password: bcrypt.hashSync("123456"),
            isAdmin:true
        },
        {
            name: "harsh Sharma",
            email:"harsh@example.com",
            password: bcrypt.hashSync("1234567"),
            isAdmin:false
        },
    ],
    
    product: [
        {
            // _id:"1",
            name: "nike t-shirt",
            slug: "nike-tshirt",
            image: "/image/p1.jpg",
            catagory: "t-shirt",
            price: 320,
            countInStock: 0,
            brand: "nike",
            rating: 4,
            numReviews: 10,
            discription: "Hanes EcoSmart Fleece, Cotton-Blend Pullover, Crewneck Sweatshirt for Men",
        },
        {
            // _id:"2",
            name: "puma shirt",
            slug: "puma-shirt",
            image: "/image/p2.jpg",
            catagory: "shirt",
            price: 290,
            countInStock: 50,
            brand: "nike",
            rating: 4.5,
            numReviews: 10,
            discription: "COOFANDY Men's Linen Shirts Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt",
        },
        {
            // _id:"3",
            name: "gucci bootcut jean",
            slug: "gucci-bootcut-jean",
            image: "/image/p3.jpg",
            catagory: "jean",
            price: 490,
            countInStock: 20,
            brand: "gucci",
            rating: 4.5,
            numReviews: 10,
            discription: "Lee Women's Ultra Lux Comfort with Flex Motion Bootcut Jean",
        },
        {
            // _id:"4",
            name: "gucci classic jean",
            slug: "gucci-classic-jean",
            image: "/image/p4.jpg",
            catagory: "jean",
            price: 499,
            countInStock: 10,
            brand: "gucci",
            rating: 4.8,
            numReviews: 10,
            discription: "Rustler Men's Classic Relaxed Fit",
        }
    ]
}

export default data;