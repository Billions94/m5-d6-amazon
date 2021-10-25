import { body } from "express-validator";

export const reviewsValidation = [
    body("title").exists().withMessage("Title is required!"),
    body("category").exists().withMessage("Category is required!"),
    body("name").exists().withMessage("Author's name is required!")
  ];