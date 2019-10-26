export const services: Record<string, any> = {
    'home': (req: any) => new Promise((resolve, reject) => {
        console.log(`🍻`);
        resolve('home');
    }),
    'blog': (req: any) => new Promise((resolve, reject) => {
        console.log(`🍻🍻`);
        resolve('blog');
    }),
    'availability': (req: any) => new Promise((resolve, reject) => {
        console.log(`🍻🍻🍻`);
        resolve('availability');
    }),
};
