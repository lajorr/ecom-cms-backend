import { Request, Response } from "express";
import Product from "../models/product";

const handleGetAllProducts = async (req: Request, res: Response) => {
    const allProducts = await Product.find({})
    res
        .status(200)
        .json(allProducts);
}

const handleCreateNewProduct = async (req: Request, res: Response) => {
    const body = req.body;
    if (!body ||
        !body.name ||
        !body.brand ||
        !body.category ||
        !body.image ||
        !body.stock ||
        !body.price
    ) {
        res.status(400).json({ msg: 'Some Fields are missing' });
        return
    }
    const newProduct = await Product.create({
        name: body.name,
        brand: body.brand,
        category: body.category,
        image: body.image,
        stock: body.stock,
        price: body.price,
        offer_price: body.offer_price,
        is_featured: body.is_featured,
        product_details: body.product_details
    })

    res
        .status(201)
        .json(
            { msg: `${newProduct.name} has been created` })
}

const handleDeleteProductById = async (req: Request, res: Response) => {
    const productId = req.params.productId;
    await Product.findByIdAndDelete(productId)
    res.status(200)
        .json({ msg: `product ${productId} has been deleted` })
}

const handleUpdateProductById = async (req: Request, res: Response) => {

    /*
    stock
    price,
    offer_price,
    is_featured,
    product_details
    image

    */
    const body = req.body;
    if (body.brand || body.category) {
        res.status(400).json({ msg: 'Brand adn Category cannot be changed' });
    }
    const productId = req.params.id;
    if (!productId) {
        res.status(400).json({ msg: 'No Product Found' });
        return
    }

    await Product.findByIdAndUpdate(productId, req.body)
    res.status(200)
        .json({ msg: `product ${productId} has been updated` })
}


export {
    handleCreateNewProduct,
    handleDeleteProductById,
    handleGetAllProducts,
    handleUpdateProductById
};

