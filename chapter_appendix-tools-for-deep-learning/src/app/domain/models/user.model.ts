import mongoose, { Model, Schema, model } from "mongoose";
import { IUser } from "../interfaces/asset.interface";
import { UserRole, UserStatus } from "../../../utils/enums.utils";

/**
 * class using IUser and representing the user model
 * @method getCollection() - to retrieve the user model schema 
 * @returns {Model<IUser>} 
 */
export default class User {
  private _collectionName: string = "users";
  private _schema: Schema = new Schema<IUser>({
    employeeId: { type: String, required: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    department: { type: String },
    role: { type: String, enum: Object.values(UserRole), required: true },
    status: { type: String, enum: Object.values(UserStatus) },
    location: { type: String },
    assignedAssets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Asset" }],
    assignedLicenses: [
      { type: mongoose.Schema.Types.ObjectId, ref: "SoftwareLicense" },
    ],
    lastLogin: { type: Date },
  });
  public getCollection(): Model<IUser> {
    return model<IUser>(this._collectionName, this._schema);
  }
}
