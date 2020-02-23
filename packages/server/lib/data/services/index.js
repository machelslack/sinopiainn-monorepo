"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simpleemailservice_1 = require("./aws/simpleemailservice");
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
        //mailchimp_client(req.body,resolve,reject)
        simpleemailservice_1.aws_ses_client(req.body, resolve, reject);
    }),
};
