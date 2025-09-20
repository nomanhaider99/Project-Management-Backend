import { Response } from 'express';
import { ProjectService } from './projects.service';
export declare class ProjectsController {
    private projectService;
    constructor(projectService: ProjectService);
    registerProject(body: any, response: Response): Promise<void>;
    getAllProjects(response: Response, params: any): Promise<void>;
    getProjectsOfUser(response: Response, params: any): Promise<void>;
    getProject(response: Response, params: any): Promise<void>;
    updateProjectById(body: any, params: any, response: Response): Promise<void>;
    addMembers(body: any, params: any, response: Response): Promise<void>;
    addMembersByUsername(body: any, params: any, response: Response): Promise<void>;
    deleteMemberById(body: any, params: any, response: Response): Promise<void>;
    deleteProjectById(params: any, response: Response): Promise<void>;
    getMilestoneOfProject(params: any, response: Response): Promise<void>;
}
