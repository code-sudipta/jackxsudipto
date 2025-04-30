import { IAssetAssignment } from "../../domain/interfaces/asset.interface";
import IAssetAssignmentService from "../../services/abstracts/IAssetAssignment.service.abstract";
import AssetAssignmentService from "../../services/assetAssignment.service";
import Controller from "./controller";

export default class AssetAssignmentController extends Controller<IAssetAssignment, IAssetAssignmentService>{
    constructor(){
        super(new AssetAssignmentService())
    }
}