import React from "react";
import { hydrate } from "react-dom";
import App from "./App";
interface inmageBlockPropsInterface {
  imgSrc: string;
  heading: string;
  paragragh: string;
}

const imageBlockProps: Record<string, inmageBlockPropsInterface> = {
  "/": {
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
  "/blog": {
    imgSrc: "assets/images/hero-images/hero-images-1.jpg",
    heading: "BLOG",
    paragragh: `will all you need to know for your next trip to Jamaica just one click away, so feel free to leave us a note. `
  },
  "/reserve": {
    imgSrc: "assets/images/hero-images/hero-images-1.jpg",
    heading: "AMAZING VALUE",
    paragragh: `At an affordable rate, giving you access to the entire villa and all of it's amenities `
  },
  "/shop": {
    imgSrc: "assets/images/hero-images/hero-images-1.jpg",
    heading: "SHOP",
    paragragh: `At an affordable rate, giving you access to the entire villa and all of it's amenities `
  }
};

const pageSrc = {
  imageBlock: imageBlockProps[location.pathname]
};

// const initialContextValue: ReactReduxContextValue = { storeState: null, store };
// export const StoreContext = React.createContext(initialContextValue);

hydrate(
  <App pageData={window.__INITIAL_DATA__ || pageSrc} />,
  document.getElementById("clientApp")
);
