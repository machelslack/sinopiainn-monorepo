import { renderToStaticMarkup, renderToStaticNodeStream } from 'react-dom/server';
import {HeadLayout , BodyLayout} from '../compositions';

const renderer = (props:any) => {
  const head = renderToStaticMarkup(HeadLayout(props));
  const body = renderToStaticNodeStream(BodyLayout(props));
  return { body, head };
};

const homePageRenderer = { type:'home', renderer};

export default homePageRenderer


