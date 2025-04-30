import { ISoftwareLicense } from "../domain/interfaces/asset.interface";
import ISoftwareLicenseRepository from "../domain/repositories/abstracts/ISoftwareLicense.repository.abstract";
import SoftwareLicenseRepository from "../domain/repositories/softwareLicense.repository";
import ISoftwareLicenseService from "./abstracts/ISoftwareLicense.service.abstract";
import Service from "./service";

export default class SoftwareLicenseService extends Service<ISoftwareLicense, ISoftwareLicenseRepository> implements ISoftwareLicenseService{
    constructor()
    {
        super(new SoftwareLicenseRepository())
    }
}