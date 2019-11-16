"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultHotelAvailability = {
    rooms: [],
    amenities: [],
    initinary: {}
};
exports.default = (state = {}, { payload, type } = {}) => {
    switch (type) {
        case 'ADD_ROOMS':
            return {
                ...state,
            };
        default:
            return state;
    }
};
