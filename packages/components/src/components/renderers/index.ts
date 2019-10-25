import { renderToStaticMarkup, renderToString, renderToNodeStream, renderToStaticNodeStream } from 'react-dom/server';
import { renderStylesToNodeStream , renderStylesToString} from 'emotion-server'
import {HeadLayout , BodyLayout} from '../compositions';

export const renderer = (props:any) => {
  const head = renderToStaticMarkup(HeadLayout(props));
  // const body = renderToStaticMarkup(BodyLayout(props)).pipe(renderStylesToNodeStream());
  const body = renderStylesToString(renderToString(BodyLayout(props)))
  return { body, head };
};

