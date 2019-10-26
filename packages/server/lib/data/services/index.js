"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = {
    'home': (req) => new Promise((resolve, reject) => {
        console.log(`🍻`);
        resolve('home');
    }),
    'blog': (req) => new Promise((resolve, reject) => {
        console.log(`🍻🍻`);
        resolve('blog');
    }),
    'availability': (req) => new Promise((resolve, reject) => {
        console.log(`🍻🍻🍻`);
        resolve('availability');
    }),
};
