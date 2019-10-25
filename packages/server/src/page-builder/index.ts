import { generateTemplate } from "../templates";

const pageBuilder = (req: any) =>
    new Promise(function (resolve, reject) {
        const pageData = req;
        const template = generateTemplate(pageData);
        resolve(template);
    });



export default pageBuilder;
