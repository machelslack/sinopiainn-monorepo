export const services: Record<string, any> = {
    'home': (req: any) => new Promise((resolve, reject) => {
        console.log(`🍻`);
        resolve('home');
    }),
    'blog': (req: any) => new Promise((resolve, reject) => {
        console.log(`🍻🍻`);
        resolve('blog');
    }),
    'reserve': (req: any) => new Promise((resolve, reject) => {
        console.log(`🍻🍻🍻`);
        resolve('reserve');
    }),
};
