import mongoose, { Model, Schema, model } from "mongoose";
import { ISoftwareLicense } from "../interfaces/asset.interface";
import {
  LicenseStatus,
  LicenseType,
} from "../../../utils/enums.utils";

/**
 * class using ISoftwareLicense and representing the license model
 * @method getCollection() - to retrieve the license model schema 
 * @returns {Model<ISoftwareLicense>} 
 */
export default class SoftwareLicense {
  private _collectionName: string = "softwarelicense";
  private _schema: Schema = new Schema<ISoftwareLicense>({
    licenseKey: { type: String, required: true, unique: true },
    softwareName: { type: String, required: true },
    publisher: { type: String },
    version: { type: String },
    type: { type: String, enum: Object.values(LicenseType), required: true },
    seats: { type: Number },
    purchaseDate: { type: Date },
    expirationDate: { type: Date },
    cost: { type: Number },
    renewalCost: { type: Number },
    status: { type: String, enum: Object.values(LicenseStatus) },
    assignedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    assignedDevices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Asset" }],
    notes: { type: String },
    lastUpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    lastModifiedDate: { type: Date },
  });
  public getCollection(): Model<ISoftwareLicense> {
    return model<ISoftwareLicense>(this._collectionName, this._schema);
  }
}
