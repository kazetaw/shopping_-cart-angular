import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Color } from "./entity/Color"
import { Customer } from "./entity/Customer"
import { OrderTable } from "./entity/OrderTable"
import { Product } from "./entity/Product"
import { ProductType } from "./entity/ProductType"
import { ProductVariants } from "./entity/ProductVariants"
import { UserLogin } from "./entity/UserLogin"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "t12345",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User,Color,Customer,OrderTable,Product,ProductType,ProductVariants,UserLogin],
    migrations: [],
    subscribers: [],
})
