import { ISoftwareLicense } from "../../domain/interfaces/asset.interface";
import ISoftwareLicenseService from "../../services/abstracts/ISoftwareLicense.service.abstract";
import SoftwareLicenseService from "../../services/softwareLicense.service";
import Controller from "./controller";

export default class SoftwareLicenseController extends Controller<ISoftwareLicense, ISoftwareLicenseService>{
  constructor()
  {
    super(new SoftwareLicenseService())
  }
}