import { Model } from "mongoose";
import { Business } from "src/modules/businesses/business.models";
import { Project } from "./project.models";
import { User } from "../users/user.models";
import { Milestone } from "../milestones/milestone.models";
export declare class ProjectService {
    private projectModel;
    private businessModel;
    private userModel;
    private milestoneModel;
    constructor(projectModel: Model<Project>, businessModel: Model<Business>, userModel: Model<User>, milestoneModel: Model<Milestone>);
    createProject(title: string, description: string, owner: Business, status: 'ongoing' | 'completed' | 'expired', priority: 'low' | 'medium' | 'urgent', startDate: string): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, Project, {}> & Project & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    getProjectsOfBusiness(id: string): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, {}, Project, {}> & Project & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    getProjectsOfUser(id: string): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, {}, Project, {}> & Project & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    getProjectById(id: string): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, Project, {}> & Project & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    updateProject(id: string, member?: string, status?: "ongoing" | "completed" | "expired", priority?: "low" | "medium" | "urgent", progress?: number, startDate?: string, endDate?: string): Promise<{
        message: string;
        data: any;
    }>;
    addMembers(id: string, member: string): Promise<{
        message: string;
        data: any;
    }>;
    addMemberThroughUsername(id: string, username: string): Promise<{
        message: string;
        data: any;
    }>;
    deleteMember(id: string, member: string): Promise<{
        message: string;
        data: any;
    }>;
    deleteProject(id: string): Promise<{
        message: string;
        data: import("mongodb").DeleteResult;
    }>;
    updateProjectProgress(id: string): Promise<{
        message: string;
        data: number;
    }>;
}
