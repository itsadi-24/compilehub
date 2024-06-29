"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const dotenv_1 = require("dotenv");
const dbConnect_1 = require("./lib/dbConnect");
const compilerRouter_1 = require("./routes/compilerRouter");
app.use((0, cors_1.default)({
    credentials: true,
    origin: ['http://localhost:5173', 'https://compilehub.vercel.app/'],
}));
app.use(express_1.default.json());
(0, dotenv_1.config)();
app.use('/compiler', compilerRouter_1.compilerRouter);
(0, dbConnect_1.dbConnect)();
app.listen(4000, () => {
    console.log('http://localhost:4000');
});
