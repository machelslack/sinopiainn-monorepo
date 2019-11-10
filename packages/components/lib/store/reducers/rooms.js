"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultHotelAvailability = {
    rooms: [],
    amenities: [],
    initinary: {}
};
exports.default = (state = defaultHotelAvailability, { payload, type } = {}) => {
    switch (type) {
        case 'ADD_ROOMS':
            return Object.assign({}, state, {
                visibilityFilter: payload
            });
        default:
            return state;
    }
};
