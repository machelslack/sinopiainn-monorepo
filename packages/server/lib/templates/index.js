"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
const emotion_server_1 = require("emotion-server");
const renderers_1 = require("@sinopiainn/components/lib/components/renderers/");
const App_1 = __importDefault(require("@sinopiainn/components/lib/client/App"));
const imageBlockProps = {
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
    }
};
exports.generateTemplate = (pageData = {}, req) => {
    const pageSrc = {
        imageBlock: imageBlockProps[pageData]
    };
    const head = server_1.renderToStaticMarkup(renderers_1.renderer.head(pageData));
    const body = emotion_server_1.renderStylesToString(server_1.renderToString(renderers_1.renderer.body(
    // <StaticRouter location={req.url} context={{}}> </StaticRouter>
    react_1.default.createElement(App_1.default, { pageData: pageSrc }), req)));
    const template = `<!DOCTYPE html><html>${head}${body}</html>`;
    return template;
};
