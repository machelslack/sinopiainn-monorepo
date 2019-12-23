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
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const prop_types_1 = __importDefault(require("prop-types"));
const actions_1 = require("../../../store/actions");
// export interface ReservePageContextInterface {}
// export const ReservepageContext = React.createContext<
//   ReservePageContextInterface
// >({});
//leftcolumn
/* Create two columns that float next to eachother */
//   color:#CB410B;
const column = core_1.css `
  display: table-cell;
  width: 50%;
  padding: 30px;
  h1 {
    border-bottom: thin dashed #cb410b;
    font-size: xxx-large;
    font-weight: 200;
    font-family: "FontspringLight";
    padding-bottom: 20px;
  }
`;
/* Clear floats after the columns */
const row = core_1.css `
  display: table;
  width: 100%;
  &:after: {
    content: ;
    display: table;
    clear: both;
  }
`;
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
const secondInnerDiv = core_1.css `
   {
    width: 100%;
  }
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
`;
const td = core_1.css `
  text-align: left;
  padding: 8px;
  border: none;
`;
const tableDiv = core_1.css `
  overflow-x: auto;
`;
const th = core_1.css `border:#cb410b thin dashed; color black;text-align: left;
padding: 8px;`;
const btn = core_1.css `
   {
    border: none; /* Remove borders */
    color: white; /* Add a text color */
    padding: 14px 28px; /* Add some padding */
    cursor: pointer; /* Add a pointer cursor on mouse-over */
  }
`;
const defaultBtn = core_1.css `
   {
    background-color: #e7e7e7;
    color: black;
    &:hover {
      background: #ddd;
    }
  }
`;
const renderItem = (items) => {
    return (core_1.jsx(react_1.default.Fragment, null, items.map((items) => (core_1.jsx("ul", { css: ul },
        core_1.jsx("li", null,
            core_1.jsx("div", { css: div },
                core_1.jsx("div", { css: innerDiv },
                    core_1.jsx("img", { className: "material-icons  mdl-list__item-avatar amenitiesAvatar fa fa-check-circle", css: i })),
                core_1.jsx("div", { css: [innerDiv, secondInnerDiv] },
                    core_1.jsx("span", { css: firstLine }, items.name),
                    core_1.jsx("br", null),
                    core_1.jsx("span", { css: secondLine }, items.description)),
                core_1.jsx("div", { css: innerDiv },
                    core_1.jsx("span", { className: "close" },
                        " ",
                        `Add for $${items.rate}`)))))))));
};
class ReservePageContent extends react_1.Component {
    constructor(props) {
        super(props);
        this.toogleRoom = (roomId) => {
            let { rooms } = this.props;
            const { itinerary, reservationId, updateRooms } = this.props;
            const { toDate, fromDate, numberOfGuest, numOfNights } = this.state;
            const room = rooms.find((room) => room._id === roomId);
            const roomIndex = rooms.findIndex((room) => room._id === roomId);
            const bookingIndex = room.bookings.findIndex((booking) => booking.RID === reservationId);
            room.bookings =
                bookingIndex >= 0
                    ? (room.bookings.splice(bookingIndex, 1), room.bookings)
                    : [
                        ...room.bookings,
                        {
                            RID: reservationId,
                            fromdate: fromDate,
                            enddate: toDate
                        }
                    ];
            // rooms = !!bookingIndex
            //   ? (rooms.splice(roomIndex, 1), [...rooms, room])
            //   : [...rooms];
            const itineraryIndex = !!itinerary.rooms
                ? itinerary.rooms.findIndex((room) => room.id === roomId)
                : null;
            itinerary.rooms =
                itineraryIndex != null && itineraryIndex >= 0
                    ? (itinerary.rooms.splice(itineraryIndex, 1), itinerary.rooms)
                    : !!itinerary.rooms
                        ? [
                            ...itinerary.rooms,
                            {
                                id: room._id,
                                name: room.name,
                                price: room.price,
                                occupancy: room.occupancy
                            }
                        ]
                        : [
                            {
                                id: room._id,
                                name: room.name,
                                price: room.price,
                                occupancy: room.occupancy
                            }
                        ];
            const roomsTotal = itinerary.rooms.reduce((total, room) => {
                return total + room.price * numOfNights;
            }, 0);
            const amenitiesTotal = !!itinerary.amenities
                ? itinerary.amenities.reduce((total, amenity) => {
                    if (amenity.frequency === "person") {
                        return total + amenity.price * 1;
                    }
                    else if (amenity.frequency === "room") {
                        return total + amenity.price * itinerary.rooms.length;
                    }
                }, 0)
                : 0;
            itinerary.total = amenitiesTotal + roomsTotal;
            return updateRooms({
                payload: {
                    rooms: [...rooms, room],
                    itinerary
                },
                type: "TOGGLE_ITEMS"
            });
        };
        this.toogleAmenity = (amenityName) => {
            const { amenities, itinerary, updateAmenities } = this.props;
            const { numberOfGuest, numOfNights } = this.state;
            const amenity = amenities.find((amenity) => amenity.name === amenityName);
            const itineraryIndex = !!itinerary.amenities
                ? itinerary.amenities.findIndex((amenity) => amenity.name === amenityName)
                : null;
            itinerary.amenities =
                itineraryIndex != null && itineraryIndex >= 0
                    ? (itinerary.amenities.splice(itineraryIndex, 1), itinerary.amenities)
                    : !!itinerary.amenities
                        ? [
                            ...itinerary.amenities,
                            {
                                name: amenity.name,
                                price: amenity.price,
                                frequency: amenity.frequency
                            }
                        ]
                        : [
                            {
                                name: amenity.name,
                                price: amenity.price,
                                frequency: amenity.frequency
                            }
                        ];
            const roomsTotal = !!itinerary.rooms
                ? itinerary.rooms.reduce((total, room) => {
                    return total + room.price * room.occupancy;
                }, 0)
                : 0;
            const amenitiesTotal = itinerary.amenities.reduce((total, amenity) => {
                if (amenity.frequency === "person") {
                    return total + amenity.price * 1;
                }
                else if (amenity.frequency === "room") {
                    return total + amenity.price * itinerary.rooms.length;
                }
            }, 0);
            itinerary.total = amenitiesTotal + roomsTotal;
            return updateAmenities({
                payload: { itinerary },
                type: "TOGGLE_ITEMS"
            });
        };
        this.state = {
            rooms: [],
            toDate: "",
            fromDate: "",
            numberOfGuest: 0,
            numOfNights: 1,
            itinerary: {
                rooms: [],
                amenities: []
            },
            checking: false
        };
        this.toogleRoom = this.toogleRoom.bind(this);
        this.toogleAmenity = this.toogleAmenity.bind(this);
    }
    componentDidMount() {
        //create reservationId
        console.log(`🍻🍻🍻🍻🍻🍻🍻 component mount`, this.props.amenities);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("this.props.mandatory_fields.updateNeeded -- ", JSON.stringify(this.state));
    }
    render() {
        return (core_1.jsx(react_1.default.Fragment, null,
            core_1.jsx("div", { className: "row", css: row },
                core_1.jsx("div", { className: "column", css: column },
                    core_1.jsx(react_1.default.Fragment, null,
                        core_1.jsx("h1", null, " ROOMS"),
                        core_1.jsx("ul", { css: ul }, this.props.rooms.map((room) => (core_1.jsx("li", null,
                            core_1.jsx("div", { css: div },
                                core_1.jsx("div", { css: innerDiv },
                                    core_1.jsx("i", { className: "material-icons  mdl-list__item-avatar amenitiesAvatar fa fa-check-circle", css: i })),
                                core_1.jsx("div", { css: [innerDiv, secondInnerDiv] },
                                    core_1.jsx("span", { css: firstLine }, room.name),
                                    core_1.jsx("br", null),
                                    core_1.jsx("span", { css: secondLine }, room.description)),
                                core_1.jsx("div", { css: innerDiv },
                                    core_1.jsx("span", { className: "close", onClick: () => {
                                            this.toogleRoom(room._id);
                                        } }, room.booked ? "REMOVE" : "ADD"))))))))),
                core_1.jsx("div", { className: "column", css: column },
                    core_1.jsx(react_1.default.Fragment, null,
                        core_1.jsx("h1", null, " AMENITIES"),
                        core_1.jsx("ul", { css: ul }, this.props.amenities.map((amenity) => (core_1.jsx("li", null,
                            core_1.jsx("div", { css: div },
                                core_1.jsx("div", { css: innerDiv },
                                    core_1.jsx("i", { className: "material-icons  mdl-list__item-avatar amenitiesAvatar fa fa-check-circle", css: i })),
                                core_1.jsx("div", { css: [innerDiv, secondInnerDiv] },
                                    core_1.jsx("span", { css: firstLine }, amenity.name),
                                    core_1.jsx("br", null),
                                    core_1.jsx("span", { css: secondLine }, amenity.description)),
                                core_1.jsx("div", { css: innerDiv },
                                    core_1.jsx("span", { className: "close", onClick: () => {
                                            this.toogleAmenity(amenity.name);
                                        } }, amenity.booked ? "REMOVE" : "ADD")))))))))),
            core_1.jsx("div", { className: "row", css: row },
                core_1.jsx("div", { className: "column", css: column }),
                core_1.jsx("div", { className: "column", css: column },
                    core_1.jsx(react_1.default.Fragment, null,
                        core_1.jsx("h1", null, " ITINERARY"),
                        " ",
                        core_1.jsx("p", null,
                            core_1.jsx("div", { css: tableDiv },
                                core_1.jsx("table", { css: table },
                                    core_1.jsx("tr", null,
                                        core_1.jsx("th", { css: th, colSpan: 3 }, "ROOMS")),
                                    !!this.props.itinerary.rooms &&
                                        this.props.itinerary.rooms.map((room) => (core_1.jsx("tr", null,
                                            core_1.jsx("td", { css: td },
                                                " ",
                                                room.name),
                                            core_1.jsx("td", { css: td }, room.price),
                                            core_1.jsx("td", { css: td }, room.price * this.state.numOfNights)))),
                                    core_1.jsx("tr", null,
                                        core_1.jsx("th", { css: th, colSpan: 3 }, "AMENITIES")),
                                    !!this.props.itinerary.amenities &&
                                        this.props.itinerary.amenities.map((amenity) => (core_1.jsx("tr", null,
                                            core_1.jsx("td", { css: td },
                                                " ",
                                                amenity.name),
                                            core_1.jsx("td", { css: td }, amenity.price),
                                            core_1.jsx("td", { css: td }, amenity.price *
                                                ((amenity.frequency === "person" &&
                                                    this.state.numberOfGuest *
                                                        this.state.numOfNights) ||
                                                    (amenity.frequency === "room" &&
                                                        this.props.itinerary.rooms.length)))))),
                                    core_1.jsx("tr", null,
                                        core_1.jsx("th", { css: th, colSpan: 3 }, "TOTAL")),
                                    core_1.jsx("tr", null,
                                        core_1.jsx("td", { css: td, colSpan: 2 }),
                                        core_1.jsx("td", { css: td }, !!this.props.itinerary.total &&
                                            this.props.itinerary.total))),
                                core_1.jsx("button", { type: "button", css: [btn, defaultBtn] }, "CONTINUE"))))))));
    }
}
exports.ReservePageContent = ReservePageContent;
ReservePageContent.defaultProps = {
    rooms: [],
    offers: [],
    amenities: [],
    itinerary: {},
    reservationId: 1,
    numOfNights: 1
};
ReservePageContent.propTypes = {
    rooms: prop_types_1.default.array,
    offers: prop_types_1.default.array,
    amenities: prop_types_1.default.array,
    itinerary: prop_types_1.default.object,
    reservationId: prop_types_1.default.number
};
const mapStateToProps = (state, ownProps) => {
    return {
        rooms: state.rooms,
        offers: state.offers,
        amenities: state.amenities,
        itinerary: state.itinerary,
        reservationId: state.reservationId
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateRooms: ({ payload, type }) => dispatch(actions_1.toogleItem(payload, type)),
        updateAmenities: ({ payload, type }) => dispatch(actions_1.toogleItem(payload, type))
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ReservePageContent);
