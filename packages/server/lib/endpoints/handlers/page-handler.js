"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_builder_1 = __importDefault(require("../../page-builder"));
const pageHandler = async (req, res) => {
    const page = page_builder_1.default(req);
    res.send(page);
};
exports.default = pageHandler;
