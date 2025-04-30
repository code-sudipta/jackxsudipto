import { IAssetComponent } from "../interfaces/asset.interface";
import AssetComponent from "../models/assetComponent.model";
import IAssetComponentRepository from "./abstracts/IAssetComponent.repository.abstract";
import Repository from "./repository";

export default class AssetComponentRepository extends Repository<IAssetComponent> implements IAssetComponentRepository{
    constructor(){
        super(new AssetComponent().getCollection())
    }
}