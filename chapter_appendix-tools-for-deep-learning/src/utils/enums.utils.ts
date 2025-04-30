/**
 * @enum - enum for asset assignent type
 */
export enum AssignmentType {
  PERMANENT = "PERMANENT",
  TEMPORARY = "TEMPORARY",
}
/**
 * @enum - enum for asset assignent status
 */
export enum AssignmentStatus {
  ACTIVE = "ACTIVE",
  RETURNED = "RETURNED",
  OVERDUE = "OVERDUE",
}
/**
 * @enum -enum for asset component type
 */
export enum AssetComponentType {
  RAM = "RAM",
  STORAGE = "STORAGE",
  GPU = "GPU",
  PERIPHERAL = "PERIPHERAL",
  ACCESSORY = "ACCESSORY",
  OTHER = "OTHER",
  CPU = "CPU",
}
/**
 * @enum -enum for asset component status
 */
export enum AssetComponentStatus {
  AVAILABLE = "AVAILABLE",
  IN_USE = "IN_USE",
  DEFECTIVE = "DEFECTIVE",
  DISPOSED = "DISPOSED",
}

/**
 * @enum -enum for asset type
 */
export enum AssetType {
  HARDWARE = "HARDWARE",
  SOFTWARE = "SOFTWARE",
  ID_CARD = "ID_CARD",
  PERIPHERAL = "PERIPHERAL",
}

/**
 * @enum -enum for asset status
 */
export enum AssetStatus {
  IN_USE = "IN_USE",
  IN_STORAGE = "IN_STORAGE",
  UNDER_REPAIR = "UNDER_REPAIR",
  DISPOSED = "DISPOSED",
  LOST = "LOST",
  STOLEN = "STOLEN",
}

/**
 * @enum -enum for asset condition
 */
export enum AssetCondition {
  NEW = "NEW",
  GOOD = "GOOD",
  FAIR = "FAIR",
  POOR = "POOR",
}

/**
 * @enum -enum for asset component action
 */
export enum ComponentAction {
  INSTALLED = "INSTALLED",
  REMOVED = "REMOVED",
}
/**
 * @enum -enum for asset maintenance type
 */
export enum MaintenanceType {
  PREVENTIVE = "PREVENTIVE",
  CORRECTIVE = "CORRECTIVE",
  UPGRADE = "UPGRADE",
}
/**
 * @enum -enum for asset maintenance status
 */
export enum MaintenanceStatus {
  SCHEDULED = "SCHEDULED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}
/**
 * @enum -enum for software license type
 */
export enum LicenseType {
  PERPETUAL = "PERPETUAL",
  SUBSCRIPTION = "SUBSCRIPTION",
}

/**
 * @enum -enum for software license status
 */

export enum LicenseStatus {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  RETIRED = "RETIRED",
}
/**
 * @enum -enum for user role
 */
export enum UserRole {
  ADMIN = "ADMIN",
  IT_STAFF = "IT_STAFF",
  MANAGER = "MANAGER",
  EMPLOYEE = "EMPLOYEE",
}
/**
 * @enum -enum for user status
 */
export enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
