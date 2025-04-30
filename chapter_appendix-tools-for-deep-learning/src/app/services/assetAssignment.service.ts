import { IAssetAssignment } from "../domain/interfaces/asset.interface";
import IAssetAssignmentRepository from "../domain/repositories/abstracts/IAssetAssignment.repository.abstract";
import AssetAssignmentRepository from "../domain/repositories/assetAssignment.repository";
import Service from "./service";

export default class AssetAssignmentService extends Service<IAssetAssignment, IAssetAssignmentRepository>{
    constructor()
    {
        super(new AssetAssignmentRepository())
    }
}