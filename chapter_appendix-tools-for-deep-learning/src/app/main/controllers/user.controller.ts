import { IUser } from "../../domain/interfaces/asset.interface";
import IUserService from "../../services/abstracts/IUser.service.abstract";
import UserService from "../../services/user.service";
import Controller from "./controller";

export default class UserController extends Controller<IUser, IUserService>{
  constructor()
  {
    super(new UserService())
  }
}