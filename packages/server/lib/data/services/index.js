"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = {
    'home': async (req) => new Promise(function (resolve, reject) {
        console.log(`🍻`);
        resolve('home');
    }),
    'blog': async (req) => new Promise(function (resolve, reject) {
        console.log(`🍻🍻`);
        resolve('blog');
    }),
    'availability': async (req) => new Promise(function (resolve, reject) {
        console.log(`🍻🍻🍻`);
        resolve('availability');
    }),
};
