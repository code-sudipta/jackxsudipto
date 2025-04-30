import { IRouter, Router } from "express";
import SoftwareLicenseController from "../controllers/softwareLicense.controller";

/**
 * A class that initializes and manages the software license model entry points.
 */
export default class SoftwareLicenseRoute {
    /**
     * The main router instance used to define application routes.
     */
    public routes: IRouter;
    /**
     * An instance of the SoftwareLicenseController class for managing license model routes.
     * @private
     */
    private _controller:SoftwareLicenseController;
    /**
     * Creates an instance of the SoftwareLicenseRoute class and initializes the main router and API routes.
     */
    constructor() {
        this.routes = Router();
        this._controller = new SoftwareLicenseController();
        this.initializeRoutes();
    }
    /**
     * Initializes the software license routes by mounting the API routes.
     */
    public initializeRoutes(): void {
        this.routes.get("/", this._controller.getDocuments.bind(this._controller))
        .post("/", this._controller.createDocument.bind(this._controller));
        this.routes.get("/:id",this._controller.getDocument.bind(this._controller))
        .patch("/:id",this._controller.updateDocument.bind(this._controller))
        .delete("/:id"),this._controller.deleteDocument.bind(this._controller);
    }
}