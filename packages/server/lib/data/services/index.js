"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mailchimp_1 = require("./mailchimp/mailchimp");
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
    'enquiry': (req) => new Promise((resolve, reject) => {
        mailchimp_1.mailchimp_client(req.body, resolve, reject);
    }),
};
