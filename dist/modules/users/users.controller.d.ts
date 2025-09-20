import { Request, Response } from 'express';
import { UserService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UserService);
    registerUser(body: any, response: Response): Promise<void>;
    getAllUsers(response: Response): Promise<void>;
    getUser(response: Response, params: any): Promise<void>;
    getUsersByIds(response: Response, body: any): Promise<void>;
    updateUserById(body: any, params: any, response: Response): Promise<void>;
    deleteUserById(params: any, response: Response): Promise<void>;
    loginUser(body: any, response: Response): Promise<void>;
    getLoggedInUser(request: Request, response: Response): Promise<void>;
    logoutUser(request: Request, response: Response): Promise<void>;
    isLoggedIn(request: Request, response: Response): Promise<void>;
}
