import mongoose, { Model, Schema, model } from "mongoose";
import { IMaintenance } from "../interfaces/asset.interface";
import {
  MaintenanceStatus,
  MaintenanceType,
} from "../../../utils/enums.utils";

/**
 * class using IMaintenance and representing the maintenance model
 * @method getCollection() - to retrieve the maintenance model schema 
 * @returns {Model<IMaintenance>} 
 */
export default class Maintenance {
  private _collectionName: string = "maintenance";
  private _schema: Schema = new Schema<IMaintenance>({
    asset: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
      required: true,
    },
    maintenanceType: {
      type: String,
      enum: Object.values(MaintenanceType),
      required: true,
    },
    description: { type: String },
    datePerformed: { type: Date },
    cost: { type: Number },
    performedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    vendor: { type: String },
    nextMaintenanceDate: { type: Date },
    status: { type: String, enum: Object.values(MaintenanceStatus) },
    notes: { type: String },
    attachments: [{ type: String }],
    lastUpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  });

  public getCollection(): Model<IMaintenance> {
    return model<IMaintenance>(this._collectionName, this._schema);
  }
}
