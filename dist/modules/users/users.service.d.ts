import mongoose, { Model } from "mongoose";
import { User } from "./user.models";
import { Request, Response } from "express";
import { AppConfigService } from "src/config/config.service";
export declare class UserService {
    private userModel;
    private appConfigService;
    constructor(userModel: Model<User>, appConfigService: AppConfigService);
    createUser(username: string, email: string, password: string): Promise<{
        message: string;
    }>;
    getUsers(): Promise<{
        message: string;
        data: (mongoose.Document<unknown, {}, User, {}> & User & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    getUserById(id: string): Promise<{
        message: string;
        data: mongoose.Document<unknown, {}, User, {}> & User & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    getUsersByIds(ids: string[]): Promise<{
        message: string;
        data: (mongoose.Document<unknown, {}, User, {}> & User & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    isLoggedIn(request: Request): Promise<boolean>;
    getLoggedInUser(request: Request): Promise<{
        data: mongoose.Document<unknown, {}, User, {}> & User & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    updateUser(id: string, tagline?: string, description?: string, image?: string, skills?: string[]): Promise<{
        message: string;
        data: any;
    }>;
    deleteUser(id: string): Promise<{
        message: string;
        data: mongoose.mongo.DeleteResult;
    }>;
    loginUser(email: string, password: string, res: Response): Promise<{
        message: string;
        data: mongoose.Document<unknown, {}, User, {}> & User & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    logoutUser(request: Request, response: Response): Promise<{
        message: string;
    }>;
}
