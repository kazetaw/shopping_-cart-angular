import { AppDataSource } from "./data-source"
import { Color } from "./entity/Color"
import { Product } from "./entity/Product"
import { ProductVariants } from "./entity/ProductVariants"
// import { User } from "./entity/User"

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

AppDataSource.initialize().then(async () => {
    app.get('/', async (req, res) => {
        const product_variants = await AppDataSource.manager.find(ProductVariants)
        res.json(product_variants)
    })

    app.post('/', async (req, res) => {
        console.log("Test log",req.body)

        console.log("Inserting a new order into the database...");
        const product_variant = new ProductVariants()
        product_variant.v_price = req.body.v_price; 
        product_variant.color.color_id =req.body.color_id
        product_variant.product = new Product()
        product_variant.product.p_id = req.body.p_id
        const product_variants = await AppDataSource.manager.save(product_variant)

        res.json(product_variants)
    })
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})