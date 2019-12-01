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
  width: 100%;
`;

const innerDiv = css`
  display: table-cell;
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
  border: 1px solid #ddd;
`;

const td = css`
  text-align: left;
  padding: 8px;
`;

const tableDiv = css`
  overflow-x: auto;
`;

const th = css`border:red thin solid; color red;text-align: left;
padding: 8px;`;

// tr: nth - child(even){ background - color: #f2f2f2 }

//rightcolumn
const optionsArray = ["option 1", "option 2", "option 3"];

const rightcolumn = (
  <React.Fragment>
    <h1> AMENITIES</h1>
    <ul css={ul}>
      <li>
        <div css={div}>
          <div css={innerDiv}>
            <i
              className="material-icons  mdl-list__item-avatar amenitiesAvatar fa fa-check-circle"
              css={i}
            ></i>
          </div>
          <div css={innerDiv}>
            <span css={firstLine}>Complimentary Breakfast</span>
            <br></br>
            <span css={secondLine}>
              Enjoy our traditional Jamaican breakfast included as part of our
              nightly room rates
            </span>
          </div>
          <div css={innerDiv}>
            <span className="close">×</span>
          </div>
        </div>
      </li>
    </ul>
  </React.Fragment>
);

const secondRowLeftColumn = <React.Fragment></React.Fragment>;

const secondRowRightColumn = (
  <React.Fragment>
    <h1> ITINERARY</h1>{" "}
    <p>
      <div css={tableDiv}>
        <table css={table}>
          <tr>
            <th css={th} colSpan={3}>
              First Name
            </th>
          </tr>
          <tr>
            <td css={td}>First Name</td>
            <td css={td}>Last Name</td>
            <td css={td}>Points</td>
          </tr>
        </table>
      </div>
    </p>
  </React.Fragment>
);

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
              <div css={innerDiv}>
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

interface ReservePageContentState {
  rooms: any;
  toDate: any;
  fromDate: any;
  numberOfGuest: any;
}

type ReservePageContentProps = {
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
    reservationId: 1
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
      numberOfGuest: 0
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
    const { toDate, fromDate, numberOfGuest } = this.state;

    const room = rooms.find((room: any) => room._id === roomId);

    const roomIndex = rooms.findIndex((room: any) => room._id === roomId);
    const bookingIndex = room.bookings.findIndex(
      (booking: any) => booking.RID === reservationId
    );

    room.bookings =
      bookingIndex >= 0
        ? room.bookings.splice(bookingIndex, 1)
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
      return total + room.price * room.occupancy;
    }, 0);

    const amenitiesTotal = !!itinerary.amenities
      ? itinerary.amenities.reduce((total: any, amenity: any) => {
          if (amenity.frequency === "person") {
            return total + amenity.price * numberOfGuest;
          } else if (amenity.frequency === "room") {
            return total + amenity.price * itinerary.rooms.length;
          }
        }, 0)
      : 0;

    itinerary.total = amenitiesTotal + roomsTotal;

    console.log(`🚨🚨🚨🚨🚨🚨 itinerary- `, itinerary);
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
    const { numberOfGuest } = this.state;

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
          return total + amenity.price * numberOfGuest;
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
                      <div css={innerDiv}>
                        <span css={firstLine}>${room.name}</span>
                        <br></br>
                        <span css={secondLine}>${room.description}</span>
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
                      <div css={innerDiv}>
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
                          ×
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          </div>
        </div>
        <TwoColumnRow
          leftcolumn={secondRowLeftColumn}
          rightcolumn={secondRowRightColumn}
        />
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
