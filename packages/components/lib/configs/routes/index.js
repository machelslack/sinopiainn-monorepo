"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_page_content_1 = __importDefault(require("../../components/compositions/page-content/home-page-content"));
const blog_page_content_1 = __importDefault(require("../../components/compositions/page-content/blog-page-content"));
const contact_page_content_1 = __importDefault(require("../../components/compositions/page-content/contact-page-content"));
const reserve_page_content_1 = __importDefault(require("../../components/compositions/page-content/reserve-page-content"));
const shop_page_content_1 = __importDefault(require("../../components/compositions/page-content/shop-page-content"));
const things_to_do_content_1 = __importDefault(require("../../components/compositions/page-content/things-to-do-content"));
exports.routes = [
    {
        path: '/',
        exact: true,
        fetchData: true,
        component: home_page_content_1.default
    },
    {
        path: 'home',
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
        path: '/reserve',
        exact: true,
        fetchData: true,
        component: reserve_page_content_1.default
    },
    {
        path: 'reserve',
        exact: true,
        fetchData: true,
        component: reserve_page_content_1.default
    },
    {
        path: '/contacts',
        exact: true,
        fetchData: false,
        component: contact_page_content_1.default
    },
    {
        path: '/shop',
        exact: true,
        fetchData: false,
        component: shop_page_content_1.default
    },
    {
        path: '/things-to-do',
        exact: true,
        fetchData: false,
        component: things_to_do_content_1.default
    }
];
