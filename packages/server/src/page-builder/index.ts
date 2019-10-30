import { generateTemplate } from "../templates";

const pageBuilder = (pageData:any,req: any) =>
    new Promise(function (resolve, reject) {
        const template = generateTemplate(pageData,req);
        resolve(template);
    });



export default pageBuilder;
