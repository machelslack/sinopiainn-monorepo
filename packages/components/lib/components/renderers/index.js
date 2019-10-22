"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_page_renderer_1 = __importDefault(require("./home-page-renderer"));
exports.renderers = {
    [home_page_renderer_1.default.type]: home_page_renderer_1.default.renderer,
};
