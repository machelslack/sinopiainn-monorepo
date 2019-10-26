import React from 'react';
import { renderToStaticMarkup, renderToString, renderToNodeStream, renderToStaticNodeStream } from 'react-dom/server';
import { renderStylesToNodeStream , renderStylesToString} from 'emotion-server'
import {HeadLayout , BodyLayout} from '../compositions';
import App from '../../client/App';

export const renderer = (pageData:any) => {
  const head = renderToStaticMarkup(HeadLayout(pageData));
  // const body = renderToStaticMarkup(BodyLayout(props)).pipe(renderStylesToNodeStream());
  const body = renderStylesToString(renderToString(BodyLayout(<App pageData={pageData}/>,pageData)))
  return { body, head };
};


