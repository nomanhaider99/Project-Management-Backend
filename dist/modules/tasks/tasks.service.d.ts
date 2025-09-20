import { Model } from 'mongoose';
import { Task } from './task.models';
export declare class TasksService {
    private taskModel;
    constructor(taskModel: Model<Task>);
    createTask(title: string, project: string, milestone: string, description?: string): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, Task, {}> & Task & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    getTasksOfMilestoneOfProject(milestone: string, project: string): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, {}, Task, {}> & Task & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    getTaskById(id: string): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, Task, {}> & Task & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    updateTask(id: string, description?: string): Promise<{
        message: string;
        data: any;
    }>;
    deleteTask(id: string): Promise<{
        message: string;
        data: import("mongodb").DeleteResult;
    }>;
}
