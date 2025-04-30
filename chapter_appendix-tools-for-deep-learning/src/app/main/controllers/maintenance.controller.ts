import { IMaintenance } from "../../domain/interfaces/asset.interface";
import IMaintenanceService from "../../services/abstracts/IMaintenance.service.abstract";
import MaintenanceService from "../../services/maintenance.service";
import Controller from "./controller";

export default class MaintenanceController extends Controller<IMaintenance, IMaintenanceService>{
  constructor()
  {
    super(new MaintenanceService())
  }
}