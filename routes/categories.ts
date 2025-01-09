import { Router } from "express";
import {
    handleCreateCategory,
    handleDeleteCategoryById,
    handleGetAllCategories,
    handleUpdateCategoryById
} from "../controllers/category";

const router = Router();

router.route('/')
    .get(handleGetAllCategories)
    .post(handleCreateCategory);

router.route('/:id')
    .delete(handleDeleteCategoryById)
    .patch(handleUpdateCategoryById);