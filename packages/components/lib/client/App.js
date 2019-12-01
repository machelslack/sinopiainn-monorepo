"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const layouts_1 = require("../layouts");
const routes_1 = require("../configs/routes");
const config_store_1 = __importDefault(require("../store/config-store"));
const react_redux_1 = require("react-redux");
const store = config_store_1.default();
class App extends react_1.Component {
    render() {
        console.log(`🚨🚨🚨🚨🚨`, this.props);
        const Route = routes_1.routes.find(route => route.path === this.props.pageData.route);
        const Component = Route.component;
        return (react_1.default.createElement(react_redux_1.Provider, { store: store },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(layouts_1.PageLayout, Object.assign({}, this.props),
                    react_1.default.createElement(Component, Object.assign({}, this.props))))));
    }
}
exports.default = App;
