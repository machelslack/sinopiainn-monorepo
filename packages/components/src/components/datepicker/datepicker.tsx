/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { TextField } from "../form/";
import AvailableItem from "../compositions/reservation/availableItem";
import { toogleItem } from "../../store/actions";
import {
  ReservePageContent,
  ReservePageContentProps,
  ReservePageContentState
} from "../compositions/page-content/reserve-page-content";
import Calendar from "../calendar/calendar";

const datepicker = css`
   {
    overflow: hidden;
    background-color: #f1f1f1;
    margin: 0 auto;
    width: 100%;
  }
`;

const inputContainer = css`
   {
    margin: 15px;
  }
`;

const icon = css`
   {
    padding: 10px;
    background: #cb410b;
    color: white;
    min-width: 50px;
    text-align: center;
  }
`;

const formInline = css`
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
} as React.CSSProperties;

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

const sticky = css`
   {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
  }
`;

const button = css`
  font-family: "FontspringRegular";
`;

const column = css`
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
const row = css`
  display: table;
  width: 100%;
  background-color: #ffffff;
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

const tooltiptext = css`
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

export class Datepicker extends Component<
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
  datePicker: any = null;
  stickPosition: any = null;

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

  setSticky = (e: any) => {
    console.log(`🚨🚨🚨`, window.pageYOffset, this.stickPosition);
    if (window.pageYOffset > this.stickPosition) {
      this.setState({ sticky: true }, () => {
        this.datePicker.classList.add("sticky");
      });
    } else {
      this.setState({ sticky: false }, () => {
        this.datePicker.classList.remove("sticky");
      });
    }
  };

  render() {
    return (
      <section
        css={this.state.sticky ? [datepicker, sticky] : [datepicker]}
        id="datePicker"
      >
        <form
          className="form-inline"
          action="/action_page.php"
          css={formInline}
        >
          <div className="input-container tooltip" css={inputContainer}>
            <i className="fa fa-calendar icon" css={icon}>
              <span className="tooltiptext" css={tooltiptext}>
                <Calendar name="to" />
              </span>
            </i>
            <input
              type="text"
              className="input-field"
              style={inputStyles}
              placeholder="FROM DATE"
            />
          </div>

          <div className="input-container tooltip" css={inputContainer}>
            <i className="fa fa-calendar icon" css={icon}>
              <span className="tooltiptext" css={tooltiptext}>
                {/* <Calendar /> */}
              </span>
            </i>
            <input
              type="text"
              className="input-field"
              style={inputStyles}
              placeholder="TO DATE"
            />
          </div>

          <div className="input-container" css={inputContainer}>
            <i className="fa fa-gift icon" css={icon}></i>
            <input
              type="text"
              className="input-field"
              style={inputStyles}
              placeholder="PROMO CODE"
            />
          </div>

          <div className="input-container" css={inputContainer}>
            <button
              type="button"
              style={buttonStyles}
              css={button}
              onClick={() => {
                this.setState({ checking: true });
                // document.getElementById("availabilitySection")!.classList.add("showSection");
              }}
            >
              CHECK AVAILABILTY
            </button>
          </div>
        </form>
        <div
          className="availabilitySection"
          css={css`
            text-align: left;
            height: ${!this.state.checking ? "0" : "550px"};
            -webkit-transition: height 2s; /* For Safari 3.1 to 6.0 */
            transition: height 2s;
          `}
          id="availabilitySection"
        >
          <div className="row" css={row}>
            <div className="column" css={column}>
              <React.Fragment>
                <h1> ROOMS</h1>
                <ul css={ul}>
                  {this.props.rooms.map((room: any) => (
                    <AvailableItem item={room} />
                  ))}
                </ul>
              </React.Fragment>
            </div>
            <div className="column" css={column}>
              <React.Fragment>
                <h1> AMENITIES</h1>
                <ul css={ul}>
                  {this.props.amenities.map((amenity: any) => (
                    <AvailableItem item={amenity} />
                  ))}
                </ul>
              </React.Fragment>
            </div>
            <div className="column" css={column}>
              <React.Fragment>
                <h1> ITINERARY</h1> <p></p>
              </React.Fragment>
            </div>
          </div>
        </div>
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Datepicker);
