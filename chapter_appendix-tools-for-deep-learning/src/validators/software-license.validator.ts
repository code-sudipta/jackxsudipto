import { body } from "express-validator";
import {
  LicenseStatus,
  LicenseType,
} from "../utils/software-license-enum.utils";

export const softwareLicenseValidator = [
  body("licenseKey").notEmpty().withMessage("License key is required"),
  body("softwareName").notEmpty().withMessage("Software name is required"),
  body("type")
    .isIn(Object.values(LicenseType))
    .withMessage("Invalid license type"),
  body("status")
    .optional()
    .isIn(Object.values(LicenseStatus))
    .withMessage("Invalid status"),
  body("purchaseDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid purchase date"),
  body("expirationDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid expiration date"),
  body("cost").optional().isNumeric().withMessage("Cost must be a number"),
  body("renewalCost")
    .optional()
    .isNumeric()
    .withMessage("Renewal cost must be a number"),
  body("assignedUsers.*").optional().isMongoId().withMessage("Invalid User ID"),
  body("assignedDevices.*")
    .optional()
    .isMongoId()
    .withMessage("Invalid Asset ID"),
  body("lastUpdatedBy").optional().isMongoId().withMessage("Invalid User ID"),
];
