import { IAssetAssignment } from "../interfaces/asset.interface";
import AssetAssignment from "../models/assetAssignment.model";
import IAssetAssignmentRepository from "./abstracts/IAssetAssignment.repository.abstract";
import Repository from "./repository";

export default class AssetAssignmentRepository extends Repository<IAssetAssignment> implements IAssetAssignmentRepository{
    constructor(){
        super(new AssetAssignment().getCollection())
    }
}