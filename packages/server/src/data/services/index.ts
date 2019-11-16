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
};
