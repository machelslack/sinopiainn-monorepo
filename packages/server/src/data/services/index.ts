export const services: Record<string, any> = {
    'home': async (req:any) => new Promise(function (resolve, reject) {
        console.log(`🍻`);
        resolve('home');
    }),
    'blog': async (req:any) => new Promise(function (resolve, reject) {
        console.log(`🍻🍻`);
        resolve('blog');
    }),
    'availability': async (req:any) => new Promise(function (resolve, reject) {
        console.log(`🍻🍻🍻`);
        resolve('availability');
    }),
};
