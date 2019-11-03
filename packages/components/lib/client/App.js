"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const layouts_1 = require("../layouts");
const routes_1 = require("../configs/routes");
const react_router_1 = require("react-router");
class App extends react_1.Component {
    render() {
        console.log(`client side app 🕺🕺🕺🕺🕺🕺🕺`);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(layouts_1.PageLayout, Object.assign({}, this.props),
                react_1.default.createElement(react_router_1.Switch, null, routes_1.routes.map(({ path, exact, component: C, ...rest }) => (react_1.default.createElement(react_router_1.Route, { key: path, path: path, exact: exact, render: () => react_1.default.createElement(C, Object.assign({}, this.props)) })))))));
    }
}
exports.default = App;
