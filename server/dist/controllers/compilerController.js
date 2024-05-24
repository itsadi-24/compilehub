"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCode = exports.saveCode = void 0;
const Code_1 = require("../models/Code");
const saveCode = async (req, res) => {
    const fullCode = req.body;
    if (!fullCode.html && !fullCode.css && !fullCode.javascript) {
        return res.status(400).send({ message: 'Code cannot be empty' });
    }
    try {
        const newCode = await Code_1.Code.create({
            fullCode: fullCode,
        });
        return res.status(201).send({ url: newCode._id });
    }
    catch (error) {
        return res.status(500).send({ message: 'Error saving code', error });
    }
};
exports.saveCode = saveCode;
const loadCode = async (req, res) => {
    const { urlId } = req.body;
    try {
        const existingCode = await Code_1.Code.findById({ urlId });
        if (!existingCode) {
            return res.status(404).send({ message: 'Code not found' });
        }
        return res.status(200).send({ fullCode: existingCode.fullCode });
    }
    catch (error) {
        return res.status(500).send({ message: 'Error loading code', error });
    }
};
exports.loadCode = loadCode;
