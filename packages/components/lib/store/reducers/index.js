"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const hotel_1 = __importDefault(require("./hotel"));
const amenities_1 = __importDefault(require("./amenities"));
const rooms_1 = __importDefault(require("./rooms"));
const offers_1 = __importDefault(require("./offers"));
const itinerary_1 = __importDefault(require("./itinerary"));
const reservation_1 = __importDefault(require("./reservation"));
exports.reducers = Object.freeze({
    hotel: hotel_1.default,
    rooms: rooms_1.default,
    amenities: amenities_1.default,
    offers: offers_1.default,
    itinerary: itinerary_1.default,
    reservationId: reservation_1.default
});
exports.rootReducer = redux_1.combineReducers(exports.reducers);
