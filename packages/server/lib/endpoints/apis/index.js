"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../data/services");
exports.apis = {
    '/': services_1.services['home'],
    '/blog': services_1.services['blog'],
    '/availability': services_1.services['availability']
};
