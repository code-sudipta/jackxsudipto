import { IMaintenance } from "../interfaces/asset.interface";
import Maintenance from "../models/maintenance.model";
import IMaintenanceRepository from "./abstracts/IMaintenance.repository.abstract";
import Repository from "./repository";

export default class MaintenanceRepository extends Repository<IMaintenance> implements IMaintenanceRepository{
    constructor(){
        super(new Maintenance().getCollection())
    }
}