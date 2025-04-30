import { body } from "express-validator";
import {
  MaintenanceStatus,
  MaintenanceType,
} from "../utils/maintenance-enum.utils";

export const maintenanceValidator = [
  body("asset")
    .notEmpty()
    .isMongoId()
    .withMessage("Valid asset ID is required"),
  body("maintenanceType")
    .isIn(Object.values(MaintenanceType))
    .withMessage("Invalid maintenance type"),
  body("status")
    .optional()
    .isIn(Object.values(MaintenanceStatus))
    .withMessage("Invalid status"),
  body("datePerformed")
    .optional()
    .isISO8601()
    .withMessage("Invalid datePerformed"),
  body("nextMaintenanceDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid nextMaintenanceDate"),
  body("performedBy").optional().isMongoId().withMessage("Invalid User ID"),
  body("cost").optional().isNumeric().withMessage("Cost must be numeric"),
  body("lastUpdatedBy").optional().isMongoId().withMessage("Invalid User ID"),
];
