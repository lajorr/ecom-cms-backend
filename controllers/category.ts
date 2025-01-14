import { Request, Response } from "express";
import Category from "../models/category";

const handleGetAllCategories = async (req: Request, res: Response) => {
    const allCategories = await Category.find({})
    res
        .status(200)
        .json(allCategories);
}

const handleGetCategoryById = async (req: Request, res: Response) => {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId)
    res
        .status(200)
        .json(category);
}

const handleCreateCategory = async (req: Request, res: Response) => {
    const body = req.body;
    console.log(body)
    if (!body || !body.name) {
        res.status(400).json({ msg: 'Category name is required' });
        return
    }
    const newCategory = await Category.create({
        name: body.name,
        description: body.description
    })

    res.status(201).json(
        { msg: `${newCategory.name} has been created` }
    )
}

const handleDeleteCategoryById = async (req: Request, res: Response) => {
    const categoryId = req.params.categoryId;
    await Category.findByIdAndDelete(categoryId)
    res.status(200)
        .json({ msg: `category ${categoryId} has been deleted` })
}

const handleUpdateCategoryById = async (req: Request, res: Response) => {
    const categoryId = req.params.categoryId;
    await Category.findByIdAndUpdate(categoryId, req.body)
    res.status(200)
        .json({ msg: `category ${categoryId} has been updated` })
}

export { handleCreateCategory, handleDeleteCategoryById, handleGetAllCategories, handleGetCategoryById, handleUpdateCategoryById };

