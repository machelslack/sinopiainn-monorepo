"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = [
    {
        path: '/',
        exact: true,
        api: 'fetchHomeData'
    },
    {
        path: '/blog',
        exact: true,
        api: 'fetchBlogData'
    },
    {
        path: '/availability',
        exact: true,
        api: 'fetchAvailabilityData'
    }
];
