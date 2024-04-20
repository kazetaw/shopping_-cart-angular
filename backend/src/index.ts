import { AppDataSource } from "./data-source"
import { Color } from "./entity/Color"
import { Customer } from "./entity/Customer"
import { Product } from "./entity/Product"
import { ProductVariants } from "./entity/ProductVariants"

const express = require('express')
const cors = require('cors');

const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const corsOptions = {
    origin: 'http://localhost:4200', // Allow requests from this origin
    methods: 'GET,POST',          // Allow only GET and POST requests
    allowedHeaders: 'Content-Type,Authorization' // Allow specific headers
};

// Enable CORS with custom options
app.use(cors(corsOptions));

AppDataSource.initialize().then(async () => {
    app.get('/home', async (req, res) => {
        const productVariants = await AppDataSource.manager.createQueryBuilder(ProductVariants, 'pv')
            .leftJoinAndSelect('pv.color', 'color')
            .leftJoinAndSelect('pv.product', 'product')
            .select([
                'pv.v_id',
                'pv.v_price',
                'color.color_name',
                'product.p_name',
                'product.p_img',
                'product.p_descript'
            ])
            .getRawMany();

        res.json(productVariants);
    });

    app.post('/home', async (req, res) => {
        console.log("Test log :", req.body);
        console.log("Inserting a new order into the database...");
        
        // ตรวจสอบค่า 'v_price' ว่าไม่ใช่ null หรือ undefined
        if (req.body.v_price == null || req.body.v_price === undefined) {
            return res.status(400).json({ message: 'v_price is required and must not be null or undefined' });
        }
    
        // สร้าง object ProductVariants และกำหนดค่าให้กับ properties
        const product_variant = new ProductVariants();
        product_variant.product = new Product();
        product_variant.product.p_img = req.body.p_img;
        product_variant.color = new Color();
        product_variant.color.color_id = req.body.color_id;
        product_variant.product.p_name = req.body.p_name;
        product_variant.product.p_descript = req.body.p_descript;
        product_variant.v_price = req.body.v_price; 
    
        const product_variants = await AppDataSource.manager.save(product_variant,)
        console.log("Saved a new order with id: " + product_variant.v_id);
        res.json(product_variants)
    });
    

    app.get('/product', async (req, res) => {
        const productVariants = await AppDataSource.getRepository(ProductVariants)
        const products = await productVariants.find({
            relations:{
                color: true,
                product:true
            }

        })

        res.json(products);
    });

    // app.post('/product', async (req, res) =>
    //     console.log("Test log :",req.body)

    //     console.log("Inserting a new order into the database...");
    //     const product_variant = new ProductVariants()
    //     product_variant.v_price = req.body.v_price; 
    //     product_variant.color = new Color()
    //     product_variant.color.color_id =req.body.color_id
    //     product_variant.product = new Product()
    //     product_variant.product.p_id = req.body.p_id
    //     const product_variants = await AppDataSource.manager.save(product_variant)
    //     // console.log("Saved a new order with id: " + product_variant.v_id);
    //     res.json(product_variants)
    // })
    //user
    app.get('/profile', async (req, res) => {
        const customer = await AppDataSource.manager.find(Customer)
        res.json(customer)
    })
//profile
    app.post('/profile', async (req, res) => {
        const customer = new Customer()
        console.log("Test log :",req.body)

        console.log("Inserting a new order into the database...");
        customer.c_fname = req.body.c_fname
        customer.c_lname = req.body.c_lname
        customer.c_address = req.body.c_address
        customer.c_birthday = req.body.c_birthday
        customer.c_tel = req.body.c_tel
        customer.c_sex = req.body.c_sex
        const customers = await AppDataSource.manager.save(Customer)
        // console.log("Saved a new order with id: " + product_variant.v_id);
        res.json(customers)
    })
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})