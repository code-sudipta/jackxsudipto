import { IRouter, Router } from "express";
import AssetComponentController from "../controllers/assetComponent.controller";

/**
 * A class that initializes and manages the asset component model entry points.
 */
export default class AssetComponentRoute {
    /**
     * The main router instance used to define application routes.
     */
    public routes: IRouter;
    /**
     * An instance of the AssetComponentController class for managing Asset component routes.
     * @private
     */
    private _controller:AssetComponentController;
    /**
     * Creates an instance of the AssetComponentRoute class and initializes the main router and API routes.
     */
    constructor() {
        this.routes = Router();
        this._controller = new AssetComponentController();
        this.initializeRoutes();
    }
    /**
     * Initializes the Asset component routes by mounting the API routes.
     */
    public initializeRoutes(): void {
        this.routes.get("/", this._controller.getDocuments.bind(this._controller))
        .post("/", this._controller.createDocument.bind(this._controller));
        this.routes.get("/:id",this._controller.getDocument.bind(this._controller))
        .patch("/:id",this._controller.updateDocument.bind(this._controller))
        .delete("/:id"),this._controller.deleteDocument.bind(this._controller);
    }
}