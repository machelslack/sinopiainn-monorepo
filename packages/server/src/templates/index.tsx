import React from 'react';
import { renderToStaticMarkup, renderToString, renderToNodeStream, renderToStaticNodeStream } from 'react-dom/server';
import { renderStylesToNodeStream, renderStylesToString } from 'emotion-server'
import { StaticRouter } from "react-router-dom"
import { renderer } from "@sinopiainn/components/lib/components/renderers/";
import App from "@sinopiainn/components/lib/client/App";

export const generateTemplate = (pageData: any = {}, req: any) => {
    const head = renderToStaticMarkup(renderer.head(pageData));
    const body = renderStylesToString(renderToString(renderer.body(
        <StaticRouter location={req.url} context={{}}>
            <App pageData={pageData} />
        </StaticRouter>
        , req)))
    const template = `<!DOCTYPE html><html>${head}${body}</html>`;
    return template;
}