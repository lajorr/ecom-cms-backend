import express from "express";
import { connectMongoDb } from "./connection";
import BrandRoutes from "./routes/brands";
import CategoryRoutes from "./routes/categories";
import ProductRoutes from "./routes/products";

const app: express.Application = express();
const PORT: number = 8080

connectMongoDb('mongodb://localhost:27017/ecom_kath')

app.use(express.urlencoded({ extended: false }));

app.use('/api/brands', BrandRoutes);
app.use('/api/categories', CategoryRoutes);
app.use('/api/products', ProductRoutes);



app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));