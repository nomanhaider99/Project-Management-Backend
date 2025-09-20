import { Project } from '../projects/project.models';
import mongoose from 'mongoose';
export declare class Milestone {
    title: string;
    description?: string;
    project: Project;
    status?: "ongoing" | "completed";
}
export declare const MilestoneSchema: mongoose.Schema<Milestone, mongoose.Model<Milestone, any, any, any, mongoose.Document<unknown, any, Milestone, any> & Milestone & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Milestone, mongoose.Document<unknown, {}, mongoose.FlatRecord<Milestone>, {}> & mongoose.FlatRecord<Milestone> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
