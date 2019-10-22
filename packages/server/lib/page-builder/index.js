"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
const pageBuilder = (req) => {
    const pageData = {};
    const template = templates_1.generateTemplate(pageData);
    return template;
};
exports.default = pageBuilder;
