import { IAsset } from "../domain/interfaces/asset.interface";
import IAssetRepository from "../domain/repositories/abstracts/IAsset.repository.abstract";
import AssetRepository from "../domain/repositories/asset.repository";
import IAssetService from "./abstracts/IAsset.service.abstract";
import Service from "./service";

export default class AssetService extends Service<IAsset, IAssetRepository> implements IAssetService{
    constructor()
    {
        super(new AssetRepository())
    }
}