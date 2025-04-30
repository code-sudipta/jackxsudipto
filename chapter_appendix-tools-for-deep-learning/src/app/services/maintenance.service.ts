import { IMaintenance } from "../domain/interfaces/asset.interface";
import IMaintenanceRepository from "../domain/repositories/abstracts/IMaintenance.repository.abstract";
import MaintenanceRepository from "../domain/repositories/maintenance.repository";
import IMaintenanceService from "./abstracts/IMaintenance.service.abstract";
import Service from "./service";

export default class MaintenanceService extends Service<IMaintenance, IMaintenanceRepository> implements IMaintenanceService{
    constructor()
    {
        super(new MaintenanceRepository())
    }
}