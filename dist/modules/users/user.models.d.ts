import mongoose from 'mongoose';
export declare class User {
    username: string;
    email: string;
    password: string;
    verified?: boolean;
    image?: string;
    tagline?: string;
    description?: string;
    skills?: string[];
    projects?: mongoose.Schema.Types.ObjectId[];
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User, any> & User & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>, {}> & mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
