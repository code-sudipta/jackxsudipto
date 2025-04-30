import { IUser } from "../interfaces/asset.interface";
import User from "../models/user.model";
import IUserRepository from "./abstracts/IUser.repository.abstract";
import Repository from "./repository";

export default class UserRepository extends Repository<IUser> implements IUserRepository
{
    constructor(){
        super(new User().getCollection())
    }
}