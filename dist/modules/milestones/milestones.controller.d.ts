import { Response } from 'express';
import { MilestonesService } from './milestones.service';
export declare class MilestonesController {
    private milestoneService;
    constructor(milestoneService: MilestonesService);
    createMilestone(body: any, response: Response): Promise<void>;
    getAllMilestones(response: Response): Promise<void>;
    getMilestoneOfProject(response: Response, params: any): Promise<void>;
    getMilestoneOfAProject(response: Response, params: any): Promise<void>;
    updateMilestoneById(body: any, params: any, response: Response): Promise<void>;
    updateMilestoneStatus(params: any, response: Response): Promise<void>;
    deleteMilestoneById(params: any, response: Response): Promise<void>;
}
