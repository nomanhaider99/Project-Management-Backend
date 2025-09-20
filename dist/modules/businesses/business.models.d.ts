import mongoose from 'mongoose';
export declare class Business {
    name: string;
    email: string;
    password: string;
    verified?: boolean;
    logo?: string;
    tagline?: string;
    description?: string;
    industry?: string;
    address?: string;
    projects: mongoose.Schema.Types.ObjectId[];
}
export declare const BusinessSchema: mongoose.Schema<Business, mongoose.Model<Business, any, any, any, mongoose.Document<unknown, any, Business, any> & Business & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Business, mongoose.Document<unknown, {}, mongoose.FlatRecord<Business>, {}> & mongoose.FlatRecord<Business> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
