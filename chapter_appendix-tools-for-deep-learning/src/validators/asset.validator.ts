import { body } from "express-validator";
import {
  AssetCondition,
  AssetStatus,
  AssetType,
  ComponentAction,
} from "../utils/asset-enum.utils";

export const assetValidator = [
  body("assetTag")
    .notEmpty()
    .withMessage("Asset tag is required")
    .isString()
    .withMessage("Asset tag must be a string"),

  body("serialNumber")
    .notEmpty()
    .withMessage("Serial number is required")
    .isString()
    .withMessage("Serial number must be a string"),

  body("name")
    .notEmpty()
    .withMessage("Asset name is required")
    .isString()
    .withMessage("Asset name must be a string"),

  body("type")
    .notEmpty()
    .withMessage("Asset type is required")
    .isIn(Object.values(AssetType))
    .withMessage("Invalid asset type"),

  body("category")
    .notEmpty()
    .withMessage("Category is required")
    .isString()
    .withMessage("Category must be a string"),

  body("manufacturer")
    .optional()
    .isString()
    .withMessage("Manufacturer must be a string"),

  body("modelName")
    .optional()
    .isString()
    .withMessage("Model name must be a string"),

  body("purchaseDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid purchase date"),

  body("purchaseCost")
    .optional()
    .isNumeric()
    .withMessage("Purchase cost must be a number"),

  body("warrantyExpiryDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid warranty expiry date"),

  body("status")
    .optional()
    .isIn(Object.values(AssetStatus))
    .withMessage("Invalid status"),

  body("condition")
    .optional()
    .isIn(Object.values(AssetCondition))
    .withMessage("Invalid condition"),

  body("location")
    .optional()
    .isString()
    .withMessage("Location must be a string"),

  body("notes").optional().isString().withMessage("Notes must be a string"),

  body("assignedTo")
    .optional()
    .isMongoId()
    .withMessage("Invalid assignedTo User ID"),

  body("lastUpdatedBy")
    .optional()
    .isMongoId()
    .withMessage("Invalid lastUpdatedBy User ID"),

  body("lastModifiedDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid lastModifiedDate"),

  body("installedComponents.*")
    .optional()
    .isMongoId()
    .withMessage("Invalid installed component ID"),

  body("componentHistory.*.component")
    .optional()
    .isMongoId()
    .withMessage("Invalid component ID in history"),

  body("componentHistory.*.action")
    .optional()
    .isIn(Object.values(ComponentAction))
    .withMessage("Invalid component action"),

  body("componentHistory.*.date")
    .optional()
    .isISO8601()
    .withMessage("Invalid date in component history"),

  body("componentHistory.*.performedBy")
    .optional()
    .isMongoId()
    .withMessage("Invalid performedBy User ID"),

  body("componentHistory.*.notes")
    .optional()
    .isString()
    .withMessage("Notes in component history must be a string"),

  body("specifications")
    .optional()
    .isObject()
    .withMessage("Specifications must be an object"),
];
