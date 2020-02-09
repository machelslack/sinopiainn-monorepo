"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios");
/*
 * action types
 */
exports.ADD_ROOM = "ADD_ROOM";
exports.TOGGLE_ROOMS = "TOGGLE_ROOMS";
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
exports.loadEnquiriesRequest = () => {
    console.log("post");
    return { type: "MAKE_ENQUIRY_REQUEST" };
};
exports.loadEnquirieSuccess = (posts) => ({
    type: "MAKE_ENQUIRY_SUCCESS",
    payload: posts
});
exports.loadEnquirieFailure = (error) => ({
    type: "MAKE_ENQUIRY_FAILURE",
    payload: error,
    error: true
});
// export const sendEquiry = (payload: any, type: string) => ({
//   payload,
//   type
// });
exports.postEquiry = (equiry) => {
    console.log("posting", equiry);
    return (dispatch) => {
        dispatch(exports.loadEnquiriesRequest());
        axios
            .post("/enquiry", equiry)
            .then(function (response) {
            dispatch(exports.loadEnquirieSuccess(response.data));
            console.log(response);
        })
            .catch(function (error) {
            dispatch(exports.loadEnquirieFailure(error));
            console.log(error);
        });
    };
};
