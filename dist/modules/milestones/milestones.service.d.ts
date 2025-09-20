import { Model } from 'mongoose';
import { Milestone } from './milestone.models';
import { Project } from '../projects/project.models';
export declare class MilestonesService {
    private milestoneModel;
    private projectModel;
    constructor(milestoneModel: Model<Milestone>, projectModel: Model<Project>);
    createMilestone(title: string, project: string, description?: string): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, Milestone, {}> & Milestone & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    getMilestones(): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, {}, Milestone, {}> & Milestone & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    getMilestonesOfProject(project: string): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, {}, Milestone, {}> & Milestone & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    getMilestoneById(id: string): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, Milestone, {}> & Milestone & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    updateMilestone(id: string, description?: string, status?: string): Promise<{
        message: string;
        data: any;
    }>;
    updateMilestoneStatus(id: string, projectId: string): Promise<{
        message: string;
    }>;
    deleteMilestone(id: string): Promise<{
        message: string;
        data: import("mongodb").DeleteResult;
    }>;
}
