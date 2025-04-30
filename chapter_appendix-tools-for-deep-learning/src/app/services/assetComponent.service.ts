import { IAssetComponent } from "../domain/interfaces/asset.interface";
import IAssetComponentRepository from "../domain/repositories/abstracts/IAssetComponent.repository.abstract";
import AssetComponentRepository from "../domain/repositories/assetComponent.repository";
import IAssetComponentService from "./abstracts/IAssetComponent.service.abtract";
import Service from "./service";

export default class AssetComponentService extends Service<IAssetComponent, IAssetComponentRepository> implements IAssetComponentService{
    constructor(){
        super(new AssetComponentRepository())
    }
}