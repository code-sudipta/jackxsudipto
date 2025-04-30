import { body } from "express-validator";
import { UserRole, UserStatus } from "../utils/user-enum.utils";

export const userValidator = [
  body("employeeId")
    .notEmpty()
    .withMessage("Employee ID is required")
    .isString()
    .withMessage("Employee ID must be a string"),

  body("firstName")
    .optional()
    .isString()
    .withMessage("First name must be a string"),

  body("lastName")
    .optional()
    .isString()
    .withMessage("Last name must be a string"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),

  body("department")
    .optional()
    .isString()
    .withMessage("Department must be a string"),

  body("role")
    .notEmpty()
    .withMessage("Role is required")
    .isIn(Object.values(UserRole))
    .withMessage("Invalid user role"),

  body("status")
    .optional()
    .isIn(Object.values(UserStatus))
    .withMessage("Invalid user status"),

  body("location")
    .optional()
    .isString()
    .withMessage("Location must be a string"),

  body("assignedAssets.*")
    .optional()
    .isMongoId()
    .withMessage("Invalid Asset ID"),

  body("assignedLicenses.*")
    .optional()
    .isMongoId()
    .withMessage("Invalid Software License ID"),

  body("lastLogin")
    .optional()
    .isISO8601()
    .withMessage("Invalid date format for lastLogin"),
];
