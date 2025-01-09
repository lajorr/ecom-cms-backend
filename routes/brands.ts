import { Router } from "express";
import {
    handleCreateBrand,
    handleDeleteBrandById,
    handleGetAllBrands,
    handleUpdateBrandById
} from "../controllers/brand";

const router = Router();

router.route('/')
    .get(handleGetAllBrands)
    .post(handleCreateBrand);


router.route('/:id')
    .delete(handleDeleteBrandById)
    .patch(handleUpdateBrandById);

