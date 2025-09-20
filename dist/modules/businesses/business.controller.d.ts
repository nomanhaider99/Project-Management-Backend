import { Request, Response } from 'express';
import { BusinessService } from './business.service';
export declare class BusinessController {
    private businessService;
    constructor(businessService: BusinessService);
    registerBusiness(body: any, response: Response): Promise<void>;
    getAllBusinesss(response: Response): Promise<void>;
    getBusiness(response: Response, params: any): Promise<void>;
    getLoggedInBusiness(response: Response, request: Request): Promise<void>;
    isBusinessLoggedIn(response: Response, request: Request): Promise<void>;
    updateBusinessById(body: any, params: any, response: Response): Promise<void>;
    deleteBusinessById(params: any, response: Response): Promise<void>;
    loginBusiness(body: any, response: Response): Promise<void>;
    logoutBusiness(response: Response, request: Request): Promise<void>;
}
