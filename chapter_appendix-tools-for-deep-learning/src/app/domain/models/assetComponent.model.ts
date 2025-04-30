import mongoose, { Model, Schema, Types, model } from "mongoose";
import { IAssetComponent } from "../interfaces/asset.interface";
import {
  AssetComponentStatus,
  AssetComponentType,
} from "../../../utils/enums.utils";

/**
 * class using IAssetComponent and representing the asset component model
 * @method getCollection() - to retrieve the asset component model schema 
 * @returns {Model<IAssetComponent>} 
 */
export default class AssetComponent {
  private _collectionName: string = "assetcomponent";
  private _schema: Schema = new Schema<IAssetComponent>({
    name: { type: String, required: true },
    type: {
      type: String,
      enum: Object.values(AssetComponentType),
      required: true,
    },
    manufacturer: { type: String },
    modelName: { type: String },
    serialNumber: { type: String },
    purchaseDate: { type: Date },
    purchaseCost: { type: Number },
    status: { type: String, enum: Object.values(AssetComponentStatus) },
    specifications: { type: Schema.Types.Mixed },
    compatibleWith: [{ type: mongoose.Schema.Types.ObjectId, ref: "Asset" }],
    currentlyInstalledIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
    },
    notes: { type: String },
    lastUpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    linkedComponent: [{ type: Types.ObjectId }],
  });

  public getCollection(): Model<IAssetComponent> {
    return model<IAssetComponent>(this._collectionName, this._schema);
  }
}
