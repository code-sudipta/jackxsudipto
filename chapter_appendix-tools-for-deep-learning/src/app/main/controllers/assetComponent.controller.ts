import { IAssetComponent } from "../../domain/interfaces/asset.interface";
import IAssetComponentService from "../../services/abstracts/IAssetComponent.service.abtract";
import AssetComponentService from "../../services/assetComponent.service";
import Controller from "./controller";

export default class AssetComponentController extends Controller<IAssetComponent, IAssetComponentService>{
  constructor(){
    super(new AssetComponentService())
  }
}