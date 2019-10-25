"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
const pageBuilder = (req) => new Promise(function (resolve, reject) {
    const pageData = req;
    const template = templates_1.generateTemplate(pageData);
    resolve(template);
});
exports.default = pageBuilder;
