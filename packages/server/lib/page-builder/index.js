"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var templates_1 = require("../templates");
var pageBuilder = function (req) {
    var pageData = {};
    var template = templates_1.generateTemplate(pageData);
    return template;
};
exports.default = pageBuilder;
