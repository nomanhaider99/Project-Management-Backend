import { Model } from "mongoose";
import { User } from "src/modules/users/user.models";
export declare class UserUtilsService {
    private userModel;
    constructor(userModel: Model<User>);
    getUserById(id: string): Promise<(import("mongoose").Document<unknown, {}, User, {}> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | undefined>;
    getUserByEmail(email: string): Promise<(import("mongoose").Document<unknown, {}, User, {}> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | undefined>;
}
