import { Response } from 'express';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    createTask(body: any, response: Response): Promise<void>;
    getTasksOfMilestone(body: any, response: Response, params: any): Promise<void>;
    getTaskOfMilestone(response: Response, params: any): Promise<void>;
    updateMilestoneById(body: any, params: any, response: Response): Promise<void>;
    deleteMilestoneById(params: any, response: Response): Promise<void>;
}
