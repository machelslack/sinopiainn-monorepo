import React from "react";
import {
  renderToStaticMarkup,
  renderToString,
  renderToNodeStream,
  renderToStaticNodeStream
} from "react-dom/server";
import { renderStylesToNodeStream, renderStylesToString } from "emotion-server";
import { StaticRouter } from "react-router-dom";
import { renderer } from "@sinopiainn/components/lib/components/renderers/";
import App from "@sinopiainn/components/lib/client/App";

interface inmageBlockPropsInterface {
  imgSrc: string;
  heading: string;
  paragragh: string;
}

const imageBlockProps: Record<string, inmageBlockPropsInterface> = {
  home: {
    imgSrc: "assets/images/hero-images/hero-images-1.jpg",
    heading: "WELCOME",
    paragragh: `To our rustic hideaway. 
        Here you can experience tropical views with lush
        green hills and skies streaked with colour, 
        not to mention amazing sunsets that will have you feeling the
        vibes to just chill.`
  },
  "/contacts": {
    imgSrc: "assets/images/hero-images/hero-images-1.jpg",
    heading: "DIRECTIONS & CONTACTS",
    paragragh: `All you need to know for your next trip to us is just one click away so feel free to leave us a note. `
  },
  blog: {
    imgSrc: "assets/images/hero-images/hero-images-1.jpg",
    heading: "BLOG",
    paragragh: `will all you need to know for your next trip to Jamaica just one click away, so feel free to leave us a note. `
  },
  reserve: {
    imgSrc: "assets/images/hero-images/hero-images-1.jpg",
    heading: "AMAZING VALUE",
    paragragh: `At an affordable rate, giving you access to the entire villa and all of it's amenities `
  },
  "/shop": {
    imgSrc: "assets/images/hero-images/hero-images-1.jpg",
    heading: "SHOP",
    paragragh: `At an affordable rate, giving you access to the entire villa and all of it's amenities `
  },
  "/things-to-do": {
    imgSrc: "assets/images/hero-images/hero-images-1.jpg",
    heading: "AMAZING VALUE",
    paragragh: `At an affordable rate, giving you access to the entire villa and all of it's amenities `
  },
  "/checkout": {
    imgSrc: "assets/images/hero-images/hero-images-1.jpg",
    heading: "AMAZING VALUE",
    paragragh: `At an affordable rate, giving you access to the entire villa and all of it's amenities `
  },
};

export const generateTemplate = (pageData: any = {}, req: any) => {
  const pageSrc = {
    imageBlock: imageBlockProps[pageData],
    route: pageData
  };
  const head = renderToStaticMarkup(renderer.head(pageData));
  const body = renderStylesToString(
    renderToString(
      renderer.body(
        // <StaticRouter location={req.url} context={{}}> </StaticRouter>
          <App pageData={pageSrc} />
       ,
        req
      )
    )
  );
  const template = `<!DOCTYPE html><html>${head}${body}</html>`;
  return template;
};
