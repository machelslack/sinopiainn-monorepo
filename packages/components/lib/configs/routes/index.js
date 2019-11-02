"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_page_content_1 = __importDefault(require("../../components/compositions/page-content/home-page-content"));
const blog_page_content_1 = __importDefault(require("../../components/compositions/page-content/blog-page-content"));
const contact_page_content_1 = __importDefault(require("../../components/compositions/page-content/contact-page-content"));
const availability_page_content_1 = __importDefault(require("../../components/compositions/page-content/availability-page-content"));
exports.routes = [
    {
        path: '/',
        exact: true,
        fetchData: true,
        component: home_page_content_1.default
    },
    {
        path: '/blog',
        exact: true,
        fetchData: true,
        component: blog_page_content_1.default
    },
    {
        path: '/availability',
        exact: true,
        fetchData: true,
        component: availability_page_content_1.default
    },
    {
        path: '/contacts',
        exact: true,
        fetchData: false,
        component: contact_page_content_1.default
    }
];
