"use strict";
/*
 * action types
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_ROOM = 'ADD_ROOM';
exports.TOGGLE_ROOMS = 'TOGGLE_ROOMS';
/*
 * action creators
 */
function addRoom(room) {
    return { type: exports.ADD_ROOM, room };
}
exports.addRoom = addRoom;
exports.toogleItem = (item, type) => ({
    type: type,
    item
});
exports.updateRooms = (payload, type) => ({
    payload,
    type
});
