import { IRouter, Router } from "express";
import MaintenanceController from "../controllers/maintenance.controller";

/**
 * A class that initializes and manages the maintenance model entry points.
 */
export default class MaintenanceRoute {
    /**
     * The main router instance used to define application routes.
     */
    public routes: IRouter;
    /**
     * An instance of the MaintenanceController class for managing mantenance routes.
     * @private
     */
    private _controller:MaintenanceController;
    /**
     * Creates an instance of the MaintenanceRoute class and initializes the main router and API routes.
     */
    constructor() {
        this.routes = Router();
        this._controller = new MaintenanceController();
        this.initializeRoutes();
    }
    /**
     * Initializes the maintenance routes by mounting the API routes.
     */
    public initializeRoutes(): void {
        this.routes.get("/", this._controller.getDocuments.bind(this._controller))
        .post("/", this._controller.createDocument.bind(this._controller));
        this.routes.get("/:id",this._controller.getDocument.bind(this._controller))
        .patch("/:id",this._controller.updateDocument.bind(this._controller))
        .delete("/:id"),this._controller.deleteDocument.bind(this._controller);
    }
}