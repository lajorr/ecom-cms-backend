import { Request, Response } from "express";
import Brand from "../models/brand";

const handleGetAllBrands = async (req: Request, res: Response) => {
    const allBrands = await Brand.find({})
    res
        .status(200)
        .json(allBrands);
}
const handleCreateBrand = async (req: Request, res: Response) => {
    const body = req.body;
    if (!body || !body.name) {
        res.status(400).json({ msg: 'Brand name is required' });
        return
    }
    const newBrand = await Brand.create({
        name: body.name,
        description: body.description
    })

    res.status(201).json(
        { msg: `${newBrand.name} has been created` }
    )
}

const handleDeleteBrandById = async (req: Request, res: Response) => {
    const brandId = req.params.brandId;
    await Brand.findByIdAndDelete(brandId)
    res.status(200)
        .json({ msg: `brand ${brandId} has been deleted` })
}

const handleUpdateBrandById = async (req: Request, res: Response) => {
    const brandId = req.params.brandId;
    await Brand.findByIdAndUpdate(brandId, req.body)
    res.status(200)
        .json({ msg: `brand ${brandId} has been updated` })
}

export { handleCreateBrand, handleDeleteBrandById, handleGetAllBrands, handleUpdateBrandById };

