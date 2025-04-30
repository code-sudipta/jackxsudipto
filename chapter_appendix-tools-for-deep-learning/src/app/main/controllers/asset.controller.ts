import { IAsset } from "../../domain/interfaces/asset.interface";
import IAssetService from "../../services/abstracts/IAsset.service.abstract";
import AssetService from "../../services/asset.service";
import Controller from "./controller";

export default class AssetController extends Controller<IAsset, IAssetService>{
  constructor()
  {
    super(new AssetService())
  }
}