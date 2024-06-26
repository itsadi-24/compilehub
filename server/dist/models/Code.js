"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// fro mongoose
const CodeSchema = new mongoose_1.default.Schema({
    fullCode: {
        html: String,
        css: String,
        js: String,
    },
});
exports.Code = mongoose_1.default.model('Code', CodeSchema);
