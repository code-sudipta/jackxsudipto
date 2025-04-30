import mongoose from "mongoose";
import { IConcept } from "./concept.interface";
import {
  AssetCondition,
  AssetStatus,
  AssetType,
  ComponentAction,
} from "../../../utils/enums.utils";
import {
  AssetComponentStatus,
  AssetComponentType,
} from "../../../utils/enums.utils";
import { LicenseStatus, LicenseType } from "../../../utils/enums.utils";
import { MaintenanceStatus, MaintenanceType } from "../../../utils/enums.utils";
import { AssignmentStatus, AssignmentType } from "../../../utils/enums.utils";
import { UserRole, UserStatus } from "../../../utils/enums.utils";

/**
 * @interface IAsset for asset model
 */
export interface IAsset extends IConcept {
  assetTag: string;
  serialNumber: string;
  name: string;
  type: AssetType;
  category: string;
  manufacturer: string;
  modelName: string;
  purchaseDate: Date;
  purchaseCost: number;
  warrantyExpiryDate: Date;
  status: AssetStatus;
  condition: AssetCondition;
  location: string;
  notes: string;
  assignedTo?: mongoose.Types.ObjectId;
  lastUpdatedBy: mongoose.Types.ObjectId;
  lastModifiedDate: Date;
  installedComponents: mongoose.Types.ObjectId[];
  componentHistory: {
    component: mongoose.Types.ObjectId;
    action: ComponentAction;
    date: Date;
    performedBy: mongoose.Types.ObjectId;
    notes?: string;
  }[];
  specifications: {
    [key: string]: any; // Flexible specifications based on component type
  };
}
/**
 * @interface IAssetComponent for asset component model
 */
export interface IAssetComponent extends IConcept {
  name: string;
  type: AssetComponentType;
  manufacturer: string;
  modelName: string;
  serialNumber?: string;
  purchaseDate: Date;
  purchaseCost: number;
  status: AssetComponentStatus;
  specifications: {
    [key: string]: any;
  };
  compatibleWith?: mongoose.Types.ObjectId[]; // Reference to compatible Asset types
  currentlyInstalledIn?: mongoose.Types.ObjectId; // Reference to Asset
  notes: string;
  lastUpdatedBy: mongoose.Types.ObjectId;
  linkedComponent: IAssetComponent[];
}
/**
 * @interface ISoftwareLicense for software license model
 */
export interface ISoftwareLicense extends IConcept {
  licenseKey: string;
  softwareName: string;
  publisher: string;
  version: string;
  type: LicenseType;
  seats: number;
  purchaseDate: Date;
  expirationDate?: Date;
  cost: number;
  renewalCost?: number;
  status: LicenseStatus;
  assignedUsers: mongoose.Types.ObjectId[];
  assignedDevices: mongoose.Types.ObjectId[];
  notes: string;
  lastUpdatedBy: mongoose.Types.ObjectId;
  lastModifiedDate: Date;
}
/**
 * @interface IMaintenance for asset maintenance model
 */
export interface IMaintenance extends IConcept {
  asset: mongoose.Types.ObjectId;
  maintenanceType: MaintenanceType;
  description: string;
  datePerformed: Date;
  cost: number;
  performedBy: mongoose.Types.ObjectId;
  vendor?: string;
  nextMaintenanceDate?: Date;
  status: MaintenanceStatus;
  notes: string;
  attachments?: string[];
  lastUpdatedBy: mongoose.Types.ObjectId;
}
/**
 * @interface IAssetAssignment for asset assignment model
 */
export interface IAssetAssignment extends IConcept {
  asset: mongoose.Types.ObjectId;
  assignedTo: mongoose.Types.ObjectId;
  assignedBy: mongoose.Types.ObjectId;
  assignmentDate: Date;
  returnDate?: Date;
  expectedReturnDate?: Date;
  status: AssignmentStatus;
  assignmentType: AssignmentType;
  assignmentNotes: string;
  returnCondition?: string;
  returnNotes?: string;
}
/**
 * @interface IUser for user model
 */
export interface IUser extends IConcept {
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  role: UserRole;
  status: UserStatus;
  location: string;
  assignedAssets: mongoose.Types.ObjectId[];
  assignedLicenses: mongoose.Types.ObjectId[];
  lastLogin?: Date;
}
