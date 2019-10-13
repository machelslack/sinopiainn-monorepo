import { generateTemplate } from "../templates";

const pageBuilder = (req:any) => {
const pageData = {};
const template = generateTemplate(pageData);
return template;
}

export default pageBuilder;
