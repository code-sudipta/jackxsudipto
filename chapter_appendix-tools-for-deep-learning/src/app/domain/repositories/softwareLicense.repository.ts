import { ISoftwareLicense } from "../interfaces/asset.interface";
import SoftwareLicense from "../models/softwareLicense.model";
import ISoftwareLicenseRepository from "./abstracts/ISoftwareLicense.repository.abstract";
import Repository from "./repository";

export default class SoftwareLicenseRepository extends Repository<ISoftwareLicense> implements ISoftwareLicenseRepository
{
    constructor(){
        super(new SoftwareLicense().getCollection())
    }
}