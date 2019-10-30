"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
const pageBuilder = (pageData, req) => new Promise(function (resolve, reject) {
    const template = templates_1.generateTemplate(pageData, req);
    resolve(template);
});
exports.default = pageBuilder;
