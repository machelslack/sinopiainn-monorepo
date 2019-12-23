/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { TwoColumnRow } from "../../../layouts/row";
import { toogleItem } from "../../../store/actions";
import { AsyncResource } from "async_hooks";
import amenities from "../../../store/reducers/amenities";

// export interface ReservePageContextInterface {}

// export const ReservepageContext = React.createContext<
//   ReservePageContextInterface
// >({});

//leftcolumn

/* Create two columns that float next to eachother */
//   color:#CB410B;
const column = css`
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
const row = css`
  display: table;
  width: 100%;
  &:after: {
    content: ;
    display: table;
    clear: both;
  }
`;

const ul = css`
  list-style: none;
  width: 100%;
  padding: 0px;
`;

const div = css`
  display: table;
`;

const innerDiv = css`
  display: table-cell;
  vertical-align: middle;
`;

const secondInnerDiv = css`
   {
    width: 100%;
  }
`;

const i = css`
  font-size: 40px;
  padding: 10px;
  line-height: 1;
  color: #cb410b;
`;

const firstLine = css`
  font-size: 16px;
  font-family: "FontspringRegular";
`;

const secondLine = css`
  font-size: 12px;
  font-family: "FontspringLight";
`;

const close = css`
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
`;

const table = css`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
`;

const td = css`
  text-align: left;
  padding: 8px;
  border: none;
`;

const tableDiv = css`
  overflow-x: auto;
`;

const th = css`border:#cb410b thin dashed; color black;text-align: left;
padding: 8px;`;

const btn = css`
   {
    border: none; /* Remove borders */
    color: white; /* Add a text color */
    padding: 14px 28px; /* Add some padding */
    cursor: pointer; /* Add a pointer cursor on mouse-over */
  }
`;

const defaultBtn = css`
   {
    background-color: #e7e7e7;
    color: black;
    &:hover {
      background: #ddd;
    }
  }
`;

const renderItem = (items: any) => {
  return (
    <React.Fragment>
      {items.map((items: any) => (
        <ul css={ul}>
          <li>
            <div css={div}>
              <div css={innerDiv}>
                <img
                  className="material-icons  mdl-list__item-avatar amenitiesAvatar fa fa-check-circle"
                  css={i}
                ></img>
              </div>
              <div css={[innerDiv, secondInnerDiv]}>
                <span css={firstLine}>{items.name}</span>
                <br></br>
                <span css={secondLine}>{items.description}</span>
              </div>
              <div css={innerDiv}>
                <span className="close"> {`Add for $${items.rate}`}</span>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </React.Fragment>
  );
};

export interface ReservePageContentState {
  rooms: any;
  toDate: any;
  fromDate: any;
  numberOfGuest: any;
  numOfNights: any;
  itinerary: any;
  checking: any;
}

export type ReservePageContentProps = {
  rooms: any;
  offers: any;
  amenities: any;
  itinerary: any;
  reservationId: any;
  updateRooms: any;
  updateAmenities: any;
};

export class ReservePageContent extends Component<
  ReservePageContentProps,
  ReservePageContentState
> {
  static defaultProps = {
    rooms: [],
    offers: [],
    amenities: [],
    itinerary: {},
    reservationId: 1,
    numOfNights: 1
  };
  static propTypes = {
    rooms: PropTypes.array,
    offers: PropTypes.array,
    amenities: PropTypes.array,
    itinerary: PropTypes.object,
    reservationId: PropTypes.number
  };

  constructor(props: any) {
    super(props);
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

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    console.log(
      "this.props.mandatory_fields.updateNeeded -- ",
      JSON.stringify(this.state)
    );
  }

  toogleRoom = (roomId: any) => {
    let { rooms } = this.props;
    const { itinerary, reservationId, updateRooms } = this.props;
    const { toDate, fromDate, numberOfGuest, numOfNights } = this.state;

    const room = rooms.find((room: any) => room._id === roomId);

    const roomIndex = rooms.findIndex((room: any) => room._id === roomId);
    const bookingIndex = room.bookings.findIndex(
      (booking: any) => booking.RID === reservationId
    );

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
      ? itinerary.rooms.findIndex((room: any) => room.id === roomId)
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

    const roomsTotal = itinerary.rooms.reduce((total: any, room: any) => {
      return total + room.price * numOfNights;
    }, 0);

    const amenitiesTotal = !!itinerary.amenities
      ? itinerary.amenities.reduce((total: any, amenity: any) => {
          if (amenity.frequency === "person") {
            return total + amenity.price * 1;
          } else if (amenity.frequency === "room") {
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

  toogleAmenity = (amenityName: any) => {
    const { amenities, itinerary, updateAmenities } = this.props;
    const { numberOfGuest, numOfNights } = this.state;

    const amenity = amenities.find(
      (amenity: any) => amenity.name === amenityName
    );

    const itineraryIndex = !!itinerary.amenities
      ? itinerary.amenities.findIndex(
          (amenity: any) => amenity.name === amenityName
        )
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
      ? itinerary.rooms.reduce((total: any, room: any) => {
          return total + room.price * room.occupancy;
        }, 0)
      : 0;

    const amenitiesTotal = itinerary.amenities.reduce(
      (total: any, amenity: any) => {
        if (amenity.frequency === "person") {
          return total + amenity.price * 1;
        } else if (amenity.frequency === "room") {
          return total + amenity.price * itinerary.rooms.length;
        }
      },
      0
    );

    itinerary.total = amenitiesTotal + roomsTotal;

    return updateAmenities({
      payload: { itinerary },
      type: "TOGGLE_ITEMS"
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* <TwoColumnRow leftcolumn={renderItem(this.props.rooms)} rightcolumn={renderItem(this.props.amenities)} /> */}
        <div className="row" css={row}>
          <div className="column" css={column}>
            <React.Fragment>
              <h1> ROOMS</h1>
              <ul css={ul}>
                {this.props.rooms.map((room: any) => (
                  <li>
                    <div css={div}>
                      <div css={innerDiv}>
                        <i
                          className="material-icons  mdl-list__item-avatar amenitiesAvatar fa fa-check-circle"
                          css={i}
                        ></i>
                      </div>
                      <div css={[innerDiv, secondInnerDiv]}>
                        <span css={firstLine}>{room.name}</span>
                        <br></br>
                        <span css={secondLine}>{room.description}</span>
                      </div>
                      <div css={innerDiv}>
                        <span
                          className="close"
                          onClick={() => {
                            this.toogleRoom(room._id);
                          }}
                        >
                          {room.booked ? "REMOVE" : "ADD"}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          </div>
          <div className="column" css={column}>
            <React.Fragment>
              <h1> AMENITIES</h1>
              <ul css={ul}>
                {this.props.amenities.map((amenity: any) => (
                  <li>
                    <div css={div}>
                      <div css={innerDiv}>
                        <i
                          className="material-icons  mdl-list__item-avatar amenitiesAvatar fa fa-check-circle"
                          css={i}
                        ></i>
                      </div>
                      <div css={[innerDiv, secondInnerDiv]}>
                        <span css={firstLine}>{amenity.name}</span>
                        <br></br>
                        <span css={secondLine}>{amenity.description}</span>
                      </div>
                      <div css={innerDiv}>
                        <span
                          className="close"
                          onClick={() => {
                            this.toogleAmenity(amenity.name);
                          }}
                        >
                          {amenity.booked ? "REMOVE" : "ADD"}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          </div>
        </div>
        <div className="row" css={row}>
          <div className="column" css={column}></div>
          <div className="column" css={column}>
            <React.Fragment>
              <h1> ITINERARY</h1>{" "}
              <p>
                <div css={tableDiv}>
                  <table css={table}>
                    <tr>
                      <th css={th} colSpan={3}>
                        ROOMS
                      </th>
                    </tr>
                    {!!this.props.itinerary.rooms &&
                      this.props.itinerary.rooms.map((room: any) => (
                        <tr>
                          <td css={td}> {room.name}</td>
                          <td css={td}>{room.price}</td>
                          <td css={td}>
                            {room.price * this.state.numOfNights}
                          </td>
                        </tr>
                      ))}
                    <tr>
                      <th css={th} colSpan={3}>
                        AMENITIES
                      </th>
                    </tr>
                    {!!this.props.itinerary.amenities &&
                      this.props.itinerary.amenities.map((amenity: any) => (
                        <tr>
                          <td css={td}> {amenity.name}</td>
                          <td css={td}>{amenity.price}</td>
                          <td css={td}>
                            {amenity.price *
                              ((amenity.frequency === "person" &&
                                this.state.numberOfGuest *
                                  this.state.numOfNights) ||
                                (amenity.frequency === "room" &&
                                  this.props.itinerary.rooms.length))}
                          </td>
                        </tr>
                      ))}
                    <tr>
                      <th css={th} colSpan={3}>
                        TOTAL
                      </th>
                    </tr>
                    <tr>
                      <td css={td} colSpan={2}>
                        {}
                      </td>
                      <td css={td}>
                        {!!this.props.itinerary.total &&
                          this.props.itinerary.total}
                      </td>
                    </tr>
                  </table>
                  <button type="button" css={[btn, defaultBtn]}>
                    CONTINUE
                  </button>
                </div>
              </p>
            </React.Fragment>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    rooms: state.rooms,
    offers: state.offers,
    amenities: state.amenities,
    itinerary: state.itinerary,
    reservationId: state.reservationId
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    updateRooms: ({ payload, type }: any) =>
      dispatch(toogleItem(payload, type)),
    updateAmenities: ({ payload, type }: any) =>
      dispatch(toogleItem(payload, type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservePageContent);
