import { combineReducers } from "redux";
import hotelReducer from "./hotel";
import amenitiesReducer from "./amenities";
import roomsReducer from "./rooms";
import offersReducer from "./offers";
import itineraryReducer from "./itinerary";
import reservationReducer from "./reservation";

export const reducers = Object.freeze({
  hotel: hotelReducer,
  rooms: roomsReducer,
  amenities: amenitiesReducer,
  offers: offersReducer,
  itinerary: itineraryReducer,
  reservationId:reservationReducer
});

export const rootReducer = combineReducers(reducers);
