import { IUser } from "../domain/interfaces/asset.interface";
import IUserRepository from "../domain/repositories/abstracts/IUser.repository.abstract";
import UserRepository from "../domain/repositories/user.repository";
import IUserService from "./abstracts/IUser.service.abstract";
import Service from "./service";

export default class UserService extends Service<IUser, IUserRepository> implements IUserService{
    constructor()
    {
        super(new UserRepository())
    }
}