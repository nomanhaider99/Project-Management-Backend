import { Model } from "mongoose";
import { Business } from "./business.models";
import { AppConfigService } from "src/config/config.service";
import { Request, Response } from "express";
export declare class BusinessService {
    private businessModel;
    private appConfigService;
    constructor(businessModel: Model<Business>, appConfigService: AppConfigService);
    createBusiness(name: string, email: string, password: string): Promise<{
        message: string;
    }>;
    getBusiness(): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, {}, Business, {}> & Business & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    getBusinessById(id: string): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, Business, {}> & Business & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    updateBusiness(id: string, tagline?: string, description?: string, logo?: string, industry?: string, address?: string): Promise<{
        message: string;
        data: any;
    }>;
    deleteBusiness(id: string): Promise<{
        message: string;
        data: import("mongodb").DeleteResult;
    }>;
    isBusinessLoggedIn(request: Request): Promise<boolean>;
    getLoggedInBusiness(request: Request): Promise<{
        data: import("mongoose").Document<unknown, {}, Business, {}> & Business & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    loginBusiness(email: string, password: string, res: Response): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, Business, {}> & Business & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    logoutBusiness(request: Request, response: Response): Promise<{
        message: string;
    }>;
}
