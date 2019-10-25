import { renderer } from "@sinopiainn/components/lib/components/renderers/";

export const generateTemplate = (pageData: any = {}) => {

    const content = renderer(pageData);

    const template = `<!DOCTYPE html><html>${content.head}${content.body}</html>`;

    return template;

}
