"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const menu_1 = require("../menu");
function Navbar() {
    const menuBarItems = [
        {
            name: 'HOME',
            route: ''
        },
        {
            name: 'BLOG',
            route: 'blog'
        },
        {
            name: 'SHOP',
            route: 'shop'
        },
        {
            name: 'AVAILABILITY',
            route: 'availabilty'
        }
    ];
    return (react_1.default.createElement(menu_1.MenuBar, null, menuBarItems.map(item => {
        return react_1.default.createElement(menu_1.MenuItem, { label: item.name },
            react_1.default.createElement(react_router_dom_1.NavLink, { activeStyle: { fontWeight: 'bold' }, to: `/${item.route}` }, item.name));
    })));
}
exports.default = Navbar;
