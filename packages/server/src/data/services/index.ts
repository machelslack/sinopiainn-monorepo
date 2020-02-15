import { mailchimp_client } from "./mailchimp/mailchimp";
import { aws_ses_client } from "./aws/simpleemailservice";

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
        aws_ses_client(req.body,resolve,reject)
    }),
};
