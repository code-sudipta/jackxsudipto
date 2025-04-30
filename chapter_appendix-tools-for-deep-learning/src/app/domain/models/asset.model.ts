import mongoose, { Schema, model, Types, Model } from "mongoose";
import { IAsset } from "../interfaces/asset.interface";
import { AssetCondition, AssetStatus, AssetType, ComponentAction } from "../../../utils/enums.utils";

/**
 * class using IAsset and representing the asset model
 * @method getCollection() - to retrieve the asset model schema 
 * @returns {Model<IAsset>} 
 */
export default class Assets {
  private _collectionName: string = "assets";
  private _schema: Schema = new Schema<IAsset>({
    assetTag: { type: String, required: true, unique: true },
    serialNumber: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    type: {
      type: String,
      enum: Object.values(AssetType),
      required: true,
    },
    category: { type: String, required: true },
    manufacturer: { type: String },
    modelName: { type: String },
    purchaseDate: { type: Date },
    purchaseCost: { type: Number },
    warrantyExpiryDate: { type: Date },
    status: {
      type: String,
      enum: Object.values(AssetStatus),
    },
    condition: { type: String, enum: Object.values(AssetCondition) },
    location: { type: String },
    notes: { type: String },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    lastUpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    lastModifiedDate: { type: Date },
    installedComponents: [
      { type: mongoose.Schema.Types.ObjectId, ref: "AssetComponent" },
    ],
    componentHistory: [
      {
        component: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "AssetComponent",
        },
        action: { type: String, enum: Object.values(ComponentAction) },
        date: { type: Date },
        performedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        notes: { type: String },
      },
    ],
    specifications: { type: Schema.Types.Mixed },
  });
  public getCollection(): Model<IAsset> {
    return model<IAsset>(this._collectionName, this._schema);
  }
}
