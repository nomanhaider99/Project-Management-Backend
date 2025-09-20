"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongoose_1 = require("mongoose");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const connectDatabase = async () => {
    const DB_URL = process.env.MONGODB_URI;
    await mongoose_1.default.connect(DB_URL)
        .then(() => {
        console.log(`MongoDB Connected Successfully! 🔥`);
    })
        .catch(() => {
        console.log(`Failed to Connect MongoDB! ❌`);
    });
};
exports.connectDatabase = connectDatabase;
//# sourceMappingURL=database.connection.js.map