import { IRouter, Router } from "express";
import AssetAssignmentController from "../controllers/assetAssignment.controller";

/**
 * A class that initializes and manages the asset assignment model entry points.
 */
export default class AssetAsignmentRoute {
    /**
     * The main router instance used to define application routes.
     */
    public routes: IRouter;
    /**
     * An instance of the AssetAssignmentController class for managing Asset routes.
     * @private
     */
    private _controller:AssetAssignmentController;
    /**
     * Creates an instance of the AssetAssignmentRoute class and initializes the main router and API routes.
     */
    constructor() {
        this.routes = Router();
        this._controller = new AssetAssignmentController();
        this.initializeRoutes();
    }
    /**
     * Initializes the Asset assignment routes by mounting the API routes.
     */
    public initializeRoutes(): void {
        this.routes.get("/", this._controller.getDocuments.bind(this._controller))
        .post("/", this._controller.createDocument.bind(this._controller));
        this.routes.get("/:id",this._controller.getDocument.bind(this._controller))
        .patch("/:id",this._controller.updateDocument.bind(this._controller))
        .delete("/:id"),this._controller.deleteDocument.bind(this._controller);
    }
}