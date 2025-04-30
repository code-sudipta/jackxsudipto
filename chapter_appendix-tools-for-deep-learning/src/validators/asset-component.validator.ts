import { body } from "express-validator";
import {
  AssetComponentType,
  AssetComponentStatus,
} from "../utils/asset-component-enum.utils";

export const assetComponentValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  body("type")
    .isIn(Object.values(AssetComponentType))
    .withMessage("Invalid component type"),
  body("status")
    .optional()
    .isIn(Object.values(AssetComponentStatus))
    .withMessage("Invalid status"),
  body("purchaseCost")
    .optional()
    .isNumeric()
    .withMessage("Purchase cost must be a number"),
  body("purchaseDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid purchase date"),
  body("compatibleWith.*")
    .optional()
    .isMongoId()
    .withMessage("Invalid Asset ID"),
  body("currentlyInstalledIn")
    .optional()
    .isMongoId()
    .withMessage("Invalid Asset ID"),
  body("lastUpdatedBy").optional().isMongoId().withMessage("Invalid User ID"),
  body("linkedComponent.*")
    .optional()
    .isMongoId()
    .withMessage("Invalid linked component ID"),
];
