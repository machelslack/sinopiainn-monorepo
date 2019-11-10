"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_page_content_1 = __importDefault(require("./home-page-content"));
const blog_page_content_1 = __importDefault(require("./blog-page-content"));
const contact_page_content_1 = __importDefault(require("./contact-page-content"));
const reserve_page_content_1 = __importDefault(require("./reserve-page-content"));
const mainContent = {
    'home': home_page_content_1.default,
    'blog': blog_page_content_1.default,
    'contact': contact_page_content_1.default,
    'reserve': reserve_page_content_1.default
};
exports.default = mainContent;
