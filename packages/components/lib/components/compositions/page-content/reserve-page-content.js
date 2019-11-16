"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const row_1 = require("../../../layouts/row");
const actions_1 = require("../../../store/actions");
const selectors_1 = require("../../../store/selectors");
exports.ReservepageContext = react_1.default.createContext({});
//leftcolumn
const ul = core_1.css ` list-style:none; width:100%;padding:0px;`;
const div = core_1.css `display:table`;
const innerDiv = core_1.css `display:table-cell; vertical-align:middle;`;
const i = core_1.css `font-size:40px;padding:10px; line-height:1;color:#CB410B;`;
const firstLine = core_1.css `font-size:16px;  font-family: 'FontspringRegular';`;
const secondLine = core_1.css `font-size:12px;  font-family: 'FontspringLight';`;
const close = core_1.css `position: absolute;
right: 0;
top: 0;
padding: 12px 16px 12px 16px;`;
const table = core_1.css `
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
`;
const td = core_1.css `  text-align: left;
padding: 8px;`;
const tableDiv = core_1.css `overflow-x:auto;`;
const th = core_1.css `border:red thin solid; color red;text-align: left;
padding: 8px;`;
// tr: nth - child(even){ background - color: #f2f2f2 }
const leftcolumn = core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("h1", null, " ROOMS"),
    core_1.jsx("ul", { css: ul },
        core_1.jsx("li", null,
            core_1.jsx("div", { css: div },
                core_1.jsx("div", { css: innerDiv },
                    core_1.jsx("i", { className: "material-icons  mdl-list__item-avatar amenitiesAvatar fa fa-check-circle", css: i })),
                core_1.jsx("div", { css: innerDiv },
                    core_1.jsx("span", { css: firstLine }, "Complimentary Breakfast"),
                    core_1.jsx("br", null),
                    core_1.jsx("span", { css: secondLine }, "Enjoy our traditional Jamaican breakfast included as part of our nightly room rates")),
                core_1.jsx("div", { css: innerDiv },
                    core_1.jsx("span", { className: "close" }, "\u00D7"))))));
//rightcolumn 
const optionsArray = ['option 1', 'option 2', 'option 3'];
const rightcolumn = core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("h1", null, " AMENITIES"),
    core_1.jsx("ul", { css: ul },
        core_1.jsx("li", null,
            core_1.jsx("div", { css: div },
                core_1.jsx("div", { css: innerDiv },
                    core_1.jsx("i", { className: "material-icons  mdl-list__item-avatar amenitiesAvatar fa fa-check-circle", css: i })),
                core_1.jsx("div", { css: innerDiv },
                    core_1.jsx("span", { css: firstLine }, "Complimentary Breakfast"),
                    core_1.jsx("br", null),
                    core_1.jsx("span", { css: secondLine }, "Enjoy our traditional Jamaican breakfast included as part of our nightly room rates")),
                core_1.jsx("div", { css: innerDiv },
                    core_1.jsx("span", { className: "close" }, "\u00D7"))))));
const secondRowLeftColumn = core_1.jsx(react_1.default.Fragment, null);
const secondRowRightColumn = core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("h1", null, " ITINERARY"),
    " ",
    core_1.jsx("p", null,
        core_1.jsx("div", { css: tableDiv },
            core_1.jsx("table", { css: table },
                core_1.jsx("tr", null,
                    core_1.jsx("th", { css: th, colSpan: 3 }, "First Name")),
                core_1.jsx("tr", null,
                    core_1.jsx("td", { css: td }, "First Name"),
                    core_1.jsx("td", { css: td }, "Last Name"),
                    core_1.jsx("td", { css: td }, "Points"))))));
const renderItem = (items) => {
    return core_1.jsx(react_1.default.Fragment, null, items.map((items) => core_1.jsx("ul", { css: ul },
        core_1.jsx("li", null,
            core_1.jsx("div", { css: div },
                core_1.jsx("div", { css: innerDiv },
                    core_1.jsx("img", { className: "material-icons  mdl-list__item-avatar amenitiesAvatar fa fa-check-circle", css: i })),
                core_1.jsx("div", { css: innerDiv },
                    core_1.jsx("span", { css: firstLine }, items.name),
                    core_1.jsx("br", null),
                    core_1.jsx("span", { css: secondLine }, items.description)),
                core_1.jsx("div", { css: innerDiv },
                    core_1.jsx("span", { className: "close" },
                        " ",
                        `Add for $${items.rate}`)))))));
};
class ReservePageContent extends react_1.Component {
    constructor(props) {
        super(props);
        this.addItem = () => {
        };
        this.addItem = this.addItem.bind(this);
    }
    render() {
        return (core_1.jsx(react_1.default.Fragment, null,
            core_1.jsx(row_1.TwoColumnRow, { leftcolumn: leftcolumn, rightcolumn: rightcolumn }),
            core_1.jsx(row_1.TwoColumnRow, { leftcolumn: secondRowLeftColumn, rightcolumn: secondRowRightColumn })));
    }
}
exports.ReservePageContent = ReservePageContent;
const mapStateToProps = (state, ownProps) => {
    return {
        rooms: selectors_1.getRooms(state),
        amenities: selectors_1.getAmenities(state),
        itinerary: selectors_1.itinerary(state)
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addItem: (item, type) => dispatch(actions_1.addItem(item, type))
    };
};
// export default ReservePageContent;
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ReservePageContent);
