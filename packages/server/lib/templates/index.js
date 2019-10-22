"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const renderers_1 = require("@sinopiainn/components/lib/components/renderers/");
exports.generateTemplate = (pageData = {}) => {
    const content = renderers_1.renderers['home'](pageData);
    const template = `<!DOCTYPE html><html>${content.head}${content.body}</html>`;
    return template;
};
