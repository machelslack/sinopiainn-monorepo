"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = {
    'home': (req) => new Promise((resolve, reject) => {
        resolve('home');
    }),
    'blog': (req) => new Promise((resolve, reject) => {
        resolve('blog');
    }),
    'reserve': (req) => new Promise((resolve, reject) => {
        resolve('reserve');
    }),
    'shop': (req) => new Promise((resolve, reject) => {
        resolve('shop');
    }),
};
