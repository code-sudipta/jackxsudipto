import { IRouter, Router } from "express";
import UserController from "../controllers/user.controller";

/**
 * A class that initializes and manages the user model entry points.
 */
export default class UserRoute {
    /**
     * The main router instance used to define application routes.
     */
    public routes: IRouter;
    /**
     * An instance of the UserController class for managing Asset routes.
     * @private
     */
    private _controller:UserController;
    /**
     * Creates an instance of the UserRoute class and initializes the main router and API routes.
     */
    constructor() {
        this.routes = Router();
        this._controller = new UserController();
        this.initializeRoutes();
    }
    /**
     * Initializes the user routes by mounting the API routes.
     */
    public initializeRoutes(): void {
        this.routes.get("/", this._controller.getDocuments.bind(this._controller))
        .post("/", this._controller.createDocument.bind(this._controller));
        this.routes.get("/:id",this._controller.getDocument.bind(this._controller))
        .patch("/:id",this._controller.updateDocument.bind(this._controller))
        .delete("/:id"),this._controller.deleteDocument.bind(this._controller);
    }
}