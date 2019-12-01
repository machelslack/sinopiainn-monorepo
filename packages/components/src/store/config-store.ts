import React from "react";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createHistory from 'history/createBrowserHistory';
import initialState from "./initial-state";
import localStorageMiddleware from './middleware/local-storage/local-storage-middleware';
import hotelReducer from "./reducers/hotel";
import amenitiesReducer from "./reducers/amenities";
import roomsReducer from "./reducers/rooms";
import offersReducer from "./reducers/offers";
import itineraryReducer from "./reducers/itinerary";
import reservationReducer from "./reducers/reservation";
import { routerMiddleware } from "react-router-redux";

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
      typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f: any) => f
    )
  );
  return store;
};
