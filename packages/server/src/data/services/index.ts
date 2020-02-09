import { mailchimp_client } from "./mailchimp/mailchimp";

export const services: Record<string, any> = {
    'home': (req: any) => new Promise((resolve, reject) => {
        resolve('home');
    }),
    'blog': (req: any) => new Promise((resolve, reject) => {
        resolve('blog');
    }),
    'reserve': (req: any) => new Promise((resolve, reject) => {
        resolve('reserve');
    }),
    'shop': (req: any) => new Promise((resolve, reject) => {
        resolve('shop');
    }),
    'enquiry': (req: any) => new Promise((resolve, reject) => {
        mailchimp_client(req.body,resolve,reject)
    }),
};
