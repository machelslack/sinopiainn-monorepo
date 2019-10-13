import { renderers } from "@sinopiainn/components/lib/components/renderers/";

export const generateTemplate = (pageData: any) => {

    const content = renderers[pageData.type];

    const template = `<!DOCTYPE html><html>${content}</html>`;

    return template;

}
