import { Project } from '../projects/project.models';
import mongoose from 'mongoose';
import { Milestone } from '../milestones/milestone.models';
export declare class Task {
    title: string;
    description?: string;
    project: Project;
    milestone: Milestone;
}
export declare const TaskSchema: mongoose.Schema<Task, mongoose.Model<Task, any, any, any, mongoose.Document<unknown, any, Task, any> & Task & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Task, mongoose.Document<unknown, {}, mongoose.FlatRecord<Task>, {}> & mongoose.FlatRecord<Task> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
