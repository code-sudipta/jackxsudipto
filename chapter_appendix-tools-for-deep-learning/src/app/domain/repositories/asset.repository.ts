import { IAsset } from "../interfaces/asset.interface";
import Assets from "../models/asset.model";
import IAssetRepository from "./abstracts/IAsset.repository.abstract";
import Repository from "./repository";

export default class AssetRepository extends Repository<IAsset> implements IAssetRepository
{
    constructor(){
        super(new Assets().getCollection())
    }
}