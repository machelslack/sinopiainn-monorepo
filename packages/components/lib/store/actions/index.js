"use strict";
/*
 * action types
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_ROOM = 'ADD_ROOM';
/*
 * action creators
 */
function addRoom(room) {
    return { type: exports.ADD_ROOM, room };
}
exports.addRoom = addRoom;
