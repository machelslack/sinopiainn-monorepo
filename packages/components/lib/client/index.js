"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = require("react-dom");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const reducers_1 = require("../store/reducers");
const App_1 = __importDefault(require("./App"));
const imageBlockProps = {
    '/': {
        imgSrc: 'assets/images/hero-images/hero-images-1.jpg',
        heading: 'WELCOME',
        paragragh: `To our rustic hideaway. 
      Here you can experience tropical views with lush
      green hills and skies streaked with colour, 
      not to mention amazing sunsets that will have you feeling the
      vibes to just chill.`,
    },
    '/contacts': {
        imgSrc: 'assets/images/hero-images/hero-images-1.jpg',
        heading: 'DIRECTIONS & CONTACTS',
        paragragh: `All you need to know for your next trip to us is just one click away so feel free to leave us a note. `,
    },
    '/blog': {
        imgSrc: 'assets/images/hero-images/hero-images-1.jpg',
        heading: 'BLOG',
        paragragh: `will all you need to know for your next trip to Jamaica just one click away, so feel free to leave us a note. `,
    },
    '/reserve': {
        imgSrc: 'assets/images/hero-images/hero-images-1.jpg',
        heading: 'AMAZING VALUE',
        paragragh: `At an affordable rate, giving you access to the entire villa and all of it's amenities `,
    },
    '/shop': {
        imgSrc: 'assets/images/hero-images/hero-images-1.jpg',
        heading: 'SHOP',
        paragragh: `At an affordable rate, giving you access to the entire villa and all of it's amenities `,
    }
};
const pageSrc = {
    imageBlock: imageBlockProps[location.pathname]
};
const middleware = [];
const initialState = {
    rooms: {}
};
const store = redux_1.createStore(reducers_1.rootReducer, initialState, redux_1.compose(redux_1.applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f));
react_dom_1.hydrate(react_1.default.createElement(react_redux_1.Provider, { store: store },
    react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(App_1.default, { pageData: window.__INITIAL_DATA__ || pageSrc }))), document.getElementById('clientApp'));
