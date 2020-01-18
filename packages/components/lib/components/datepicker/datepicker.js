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
const availableItem_1 = __importDefault(require("../compositions/reservation/availableItem"));
const actions_1 = require("../../store/actions");
const calendar_1 = __importDefault(require("../calendar/calendar"));
const datepicker = core_1.css `
   {
    overflow: hidden;
    background-color: #f1f1f1;
    margin: 0 auto;
    width: 100%;
  }
`;
const inputContainer = core_1.css `
   {
    margin: 15px;
  }
`;
const icon = core_1.css `
   {
    padding: 10px;
    background: #cb410b;
    color: white;
    min-width: 50px;
    text-align: center;
  }
`;
const formInline = core_1.css `
   {
    display: flex;
    flex-flow: row wrap;
    width: 55%;
    margin: 0 auto;
  }
`;
const inputStyles = {
    padding: "10px",
    outline: "none"
};
const buttonStyles = {
    padding: "10px",
    outline: "none",
    backgroundColor: "#cb410b",
    border: "1px solid #ddd",
    color: "white",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "royalblue"
    }
};
const sticky = core_1.css `
   {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
  }
`;
const button = core_1.css `
  font-family: "FontspringRegular";
`;
const column = core_1.css `
  display: table-cell;
  width: 33.3%;
  padding: 30px;
  background-color: inher;
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
  background-color: #ffffff;
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
const tooltiptext = core_1.css `
   {
    visibility: hidden;
    width: auto;
    background-color: #cb410b;
    color: #000000;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    margin-left: -160px;
    margin-top: 30px;
    &:after {
      content: "";
      position: absolute;
      bottom: 100%;
      left: 50%;
      margin-left: -5px;
      margin-top: 30px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent #cb410b transparent;
    }
  }
`;
class Datepicker extends react_1.Component {
    constructor(props) {
        super(props);
        this.datePicker = null;
        this.stickPosition = null;
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
        this.setSticky = (e) => {
            console.log(`🚨🚨🚨`, window.pageYOffset, this.stickPosition);
            if (window.pageYOffset > this.stickPosition) {
                this.setState({ sticky: true }, () => {
                    this.datePicker.classList.add("sticky");
                });
            }
            else {
                this.setState({ sticky: false }, () => {
                    this.datePicker.classList.remove("sticky");
                });
            }
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
            checking: false,
            sticky: false
        };
        this.toogleRoom = this.toogleRoom.bind(this);
        this.toogleAmenity = this.toogleAmenity.bind(this);
        this.setSticky = this.setSticky.bind(this);
    }
    componentDidMount() {
        this.datePicker = document.getElementById("datePicker");
        this.stickPosition = this.datePicker.offsetTop;
        window.onscroll = this.setSticky;
    }
    render() {
        return (core_1.jsx("section", { css: this.state.sticky ? [datepicker, sticky] : [datepicker], id: "datePicker" },
            core_1.jsx("form", { className: "form-inline", action: "/action_page.php", css: formInline },
                core_1.jsx("div", { className: "input-container tooltip", css: inputContainer },
                    core_1.jsx("i", { className: "fa fa-calendar icon", css: icon },
                        core_1.jsx("span", { className: "tooltiptext", css: tooltiptext },
                            core_1.jsx(calendar_1.default, { name: "to" }))),
                    core_1.jsx("input", { type: "text", className: "input-field", style: inputStyles, placeholder: "FROM DATE" })),
                core_1.jsx("div", { className: "input-container tooltip", css: inputContainer },
                    core_1.jsx("i", { className: "fa fa-calendar icon", css: icon },
                        core_1.jsx("span", { className: "tooltiptext", css: tooltiptext })),
                    core_1.jsx("input", { type: "text", className: "input-field", style: inputStyles, placeholder: "TO DATE" })),
                core_1.jsx("div", { className: "input-container", css: inputContainer },
                    core_1.jsx("i", { className: "fa fa-gift icon", css: icon }),
                    core_1.jsx("input", { type: "text", className: "input-field", style: inputStyles, placeholder: "PROMO CODE" })),
                core_1.jsx("div", { className: "input-container", css: inputContainer },
                    core_1.jsx("button", { type: "button", style: buttonStyles, css: button, onClick: () => {
                            this.setState({ checking: true });
                            // document.getElementById("availabilitySection")!.classList.add("showSection");
                        } }, "CHECK AVAILABILTY"))),
            core_1.jsx("div", { className: "availabilitySection", css: core_1.css `
            text-align: left;
            height: ${!this.state.checking ? "0" : "550px"};
            -webkit-transition: height 2s; /* For Safari 3.1 to 6.0 */
            transition: height 2s;
          `, id: "availabilitySection" },
                core_1.jsx("div", { className: "row", css: row },
                    core_1.jsx("div", { className: "column", css: column },
                        core_1.jsx(react_1.default.Fragment, null,
                            core_1.jsx("h1", null, " ROOMS"),
                            core_1.jsx("ul", { css: ul }, this.props.rooms.map((room) => (core_1.jsx(availableItem_1.default, { item: room })))))),
                    core_1.jsx("div", { className: "column", css: column },
                        core_1.jsx(react_1.default.Fragment, null,
                            core_1.jsx("h1", null, " AMENITIES"),
                            core_1.jsx("ul", { css: ul }, this.props.amenities.map((amenity) => (core_1.jsx(availableItem_1.default, { item: amenity })))))),
                    core_1.jsx("div", { className: "column", css: column },
                        core_1.jsx(react_1.default.Fragment, null,
                            core_1.jsx("h1", null, " ITINERARY"),
                            " ",
                            core_1.jsx("p", null)))))));
    }
}
exports.Datepicker = Datepicker;
Datepicker.defaultProps = {
    rooms: [],
    offers: [],
    amenities: [],
    itinerary: {},
    reservationId: 1,
    numOfNights: 1
};
Datepicker.propTypes = {
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
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Datepicker);
