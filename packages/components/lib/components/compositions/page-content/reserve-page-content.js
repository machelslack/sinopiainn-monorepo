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
// export interface ReservePageContextInterface {}
// export const ReservepageContext = React.createContext<
//   ReservePageContextInterface
// >({});
//leftcolumn
const ul = core_1.css `
  list-style: none;
  width: 100%;
  padding: 0px;
`;
const div = core_1.css `
  display: table;
`;
const innerDiv = core_1.css `
  display: table-cell;
  vertical-align: middle;
`;
const i = core_1.css `
  font-size: 40px;
  padding: 10px;
  line-height: 1;
  color: #cb410b;
`;
const firstLine = core_1.css `
  font-size: 16px;
  font-family: "FontspringRegular";
`;
const secondLine = core_1.css `
  font-size: 12px;
  font-family: "FontspringLight";
`;
const close = core_1.css `
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
`;
const table = core_1.css `
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
`;
const td = core_1.css `
  text-align: left;
  padding: 8px;
`;
const tableDiv = core_1.css `
  overflow-x: auto;
`;
const th = core_1.css `border:red thin solid; color red;text-align: left;
padding: 8px;`;
// tr: nth - child(even){ background - color: #f2f2f2 }
//rightcolumn
const optionsArray = ["option 1", "option 2", "option 3"];
const rightcolumn = (core_1.jsx(react_1.default.Fragment, null,
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
                    core_1.jsx("span", { className: "close" }, "\u00D7")))))));
const secondRowLeftColumn = core_1.jsx(react_1.default.Fragment, null);
const secondRowRightColumn = (core_1.jsx(react_1.default.Fragment, null,
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
                    core_1.jsx("td", { css: td }, "Points")))))));
const renderItem = (items) => {
    return (core_1.jsx(react_1.default.Fragment, null, items.map((items) => (core_1.jsx("ul", { css: ul },
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
                        `Add for $${items.rate}`)))))))));
};
class ReservePageContent extends react_1.Component {
    // static defaultProps = {
    //   rooms: [],
    //   offers: [],
    //   amenities: [],
    //   itinerary: {},
    //   reservationId: 1
    // };
    // static propTypes = {
    //   rooms: PropTypes.array,
    //   offers: PropTypes.array,
    //   amenities: PropTypes.array,
    //   itinerary: PropTypes.object,
    //   reservationId: PropTypes.number
    // };
    constructor(props) {
        super(props);
        this.toogleRoom = (roomId) => {
            let { rooms } = this.props;
            const { itinerary, reservationId, updateRooms } = this.props;
            const { toDate, fromDate, numberOfGuest } = this.state;
            const room = rooms.find((room) => room._id === roomId);
            const roomIndex = rooms.findIndex((room) => room._id === roomId);
            const bookingIndex = room.bookings.findIndex((booking) => booking._id === reservationId);
            room.bookings = !!bookingIndex
                ? room.bookings.splice(bookingIndex, 1)
                : [
                    ...room.bookings,
                    {
                        RID: reservationId,
                        fromdate: fromDate,
                        enddate: toDate
                    }
                ];
            rooms = !!bookingIndex
                ? (rooms.splice(roomIndex, 1), [...rooms, room])
                : [...rooms];
            const inItineraryIndex = itinerary.rooms.findIndex((room) => room._id === roomId);
            itinerary.rooms = !!inItineraryIndex
                ? itinerary.rooms.splice(inItineraryIndex, 1)
                : [
                    ...itinerary.rooms,
                    {
                        id: room._id,
                        name: room.name,
                        price: room.price,
                        occupancy: room.occupancy
                    }
                ];
            itinerary.total =
                itinerary.rooms.reduce((total, room) => {
                    return total + room.price * room.occupancy;
                }, 0) +
                    itinerary.amenities.reduce((total, amenity) => {
                        if (amenity.frequency === "person") {
                            return total + amenity.price * numberOfGuest;
                        }
                        else if (amenity.frequency === "room") {
                            return total + amenity.price * itinerary.rooms.length;
                        }
                    }, 0);
            return updateRooms({
                payload: {
                    rooms: [...rooms, room],
                    itinerary
                },
                type: "TOGGLE_ROOMS"
            });
        };
        this.toogleAmenity = (amenityName) => {
            const { amenities, itinerary, updateAmenities } = this.props;
            const { numberOfGuest } = this.state;
            const amenity = amenities.find((amenity) => amenity.name === amenityName);
            const inItineraryIndex = itinerary.amenities.findIndex((amenity) => amenity.name === amenityName);
            itinerary.rooms = !!inItineraryIndex
                ? itinerary.amenities.splice(inItineraryIndex, 1)
                : [
                    ...itinerary.amenities,
                    {
                        name: amenity.name,
                        price: amenity.price,
                        frequency: amenity.frequency
                    }
                ];
            itinerary.total =
                itinerary.rooms.reduce((total, room) => {
                    return total + room.price * room.occupancy;
                }, 0) +
                    itinerary.amenities.reduce((total, amenity) => {
                        if (amenity.frequency === "person") {
                            return total + amenity.price * numberOfGuest;
                        }
                        else if (amenity.frequency === "room") {
                            return total + amenity.price * itinerary.rooms.length;
                        }
                    }, 0);
            return updateAmenities({
                payload: { itinerary },
                type: "TOOGLE_AMENITY"
            });
        };
        this.state = {
            rooms: [],
            toDate: "",
            fromDate: "",
            numberOfGuest: 0
        };
        this.toogleRoom = this.toogleRoom.bind(this);
        this.toogleAmenity = this.toogleAmenity.bind(this);
    }
    componentDidMount() {
        //create reservationId
        console.log(`🍻🍻🍻🍻🍻🍻🍻`, this.props);
    }
    render() {
        return (core_1.jsx(react_1.default.Fragment, null,
            core_1.jsx(row_1.TwoColumnRow, { leftcolumn: core_1.jsx(react_1.default.Fragment, null,
                    core_1.jsx("h1", null, " ROOMS"),
                    core_1.jsx("ul", { css: ul }, this.state.rooms.map((room) => (core_1.jsx("li", null,
                        core_1.jsx("div", { css: div },
                            core_1.jsx("div", { css: innerDiv },
                                core_1.jsx("i", { className: "material-icons  mdl-list__item-avatar amenitiesAvatar fa fa-check-circle", css: i })),
                            core_1.jsx("div", { css: innerDiv },
                                core_1.jsx("span", { css: firstLine },
                                    "$",
                                    room.name),
                                core_1.jsx("br", null),
                                core_1.jsx("span", { css: secondLine },
                                    "$",
                                    room.description)),
                            core_1.jsx("div", { css: innerDiv },
                                core_1.jsx("span", { className: "close", onClick: () => {
                                        this.toogleRoom(room._id);
                                    } }, room.booked ? "REMOVE" : "ADD")))))))), rightcolumn: rightcolumn }),
            core_1.jsx(row_1.TwoColumnRow, { leftcolumn: secondRowLeftColumn, rightcolumn: secondRowRightColumn })));
    }
}
exports.ReservePageContent = ReservePageContent;
const mapStateToProps = (state, ownProps) => {
    return {
        rooms: state.rooms,
        offers: state.offers,
        amenities: state.amenities,
        itinerary: state.itinerary,
        reservationId: state.reservationsId
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateRooms: ({ payload, type }) => dispatch(actions_1.toogleItem(payload, type)),
        updateAmenities: ({ payload, type }) => dispatch(actions_1.toogleItem(payload, type))
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ReservePageContent);
