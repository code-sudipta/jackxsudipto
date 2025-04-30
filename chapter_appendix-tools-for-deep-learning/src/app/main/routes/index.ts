import { IRouter, Router } from "express";
import AssetRoute from "./asset.routes";

/**
 * A class that initializes and manages the routes for an application's operations.
 */
export default class Routes {
  /**
   * The router instance used to define routes.
   * @public
   */
  public routes: IRouter;
  private _assetRoutes: AssetRoute;
  /**
   * Creates an instance of the Routes class and initializes the router and AsyncUtils instances.
   */
  constructor() {
    this.routes = Router();
    this._assetRoutes = new AssetRoute();
    this.initializeRoutes();
  }
  /**
   * Initializes the routes for the application's operations.
   * This method should be overridden to define the actual routes.
   */
  public initializeRoutes(): void {
    //define operation's routes here
    this.routes.use("/asset",this._assetRoutes.routes)
  }
}
