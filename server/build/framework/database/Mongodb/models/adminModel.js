"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const adminSchema = new mongoose_1.Schema({
    name: {
        type: String,
        default: 'CONNECTIFY-ADMIN'
    },
    email: {
        require: true,
        type: String
    },
    password: {
        require: true,
        type: String
    }
});
const Admin = (0, mongoose_1.model)('admin', adminSchema);
exports.default = Admin;
