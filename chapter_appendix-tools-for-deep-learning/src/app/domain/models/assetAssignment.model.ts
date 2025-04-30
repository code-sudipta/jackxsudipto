import mongoose, { Model, Schema, model } from "mongoose";
import { IAssetAssignment } from "../interfaces/asset.interface";
import {
  AssignmentStatus,
  AssignmentType,
} from "../../../utils/enums.utils";

/**
 * class using IAssetAssignment and representing the asset assignment model
 * @method getCollection() - to retrieve the asset assignment model schema 
 * @returns {Model<IAssetAssignment>} 
 */
export default class AssetAssignment {
  private _collectionName: string = "assetassignment";
  private _schema: Schema = new Schema<IAssetAssignment>({
    asset: { type: mongoose.Schema.Types.ObjectId, ref: "Asset" },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    assignedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    assignmentDate: { type: Date },
    returnDate: { type: Date },
    expectedReturnDate: { type: Date },
    status: { type: String, enum: Object.values(AssignmentStatus) },
    assignmentType: { type: String, enum: Object.values(AssignmentType) },
    assignmentNotes: { type: String },
    returnCondition: { type: String },
    returnNotes: { type: String },
  });

  public getCollection(): Model<IAssetAssignment> {
    return model<IAssetAssignment>(this._collectionName, this._schema);
  }
}
