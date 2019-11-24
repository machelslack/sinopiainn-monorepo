import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import initialState from "./initial-state";
import localStorageMiddleware from './middleware/local-storage/local-storage-middleware';
import hotelReducer from "./reducers/hotel";
import amenitiesReducer from "./reducers/amenities";
import roomsReducer from "./reducers/rooms";
import offersReducer from "./reducers/offers";
import itineraryReducer from "./reducers/itinerary";
import reservationReducer from "./reducers/reservation";

export const reducers = Object.freeze({
  hotel: hotelReducer,
  rooms: roomsReducer,
  amenities: amenitiesReducer,
  offers: offersReducer,
  itinerary: itineraryReducer,
  reservationId: reservationReducer
});

const rootReducer = combineReducers(reducers);

const middleware: any = [
    localStorageMiddleware
];

export default () => {
  const store = createStore(
    rootReducer,
    initialState(),
    compose(
      applyMiddleware(...middleware),
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f: any) => f
    )
  );
  return store;
};
