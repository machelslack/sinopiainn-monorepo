const axios = require("axios");

/*
 * action types
 */

export const ADD_ROOM = "ADD_ROOM";
export const TOGGLE_ROOMS = "TOGGLE_ROOMS";

/*
 * action creators
 */

export function addRoom(room: any) {
  return { type: ADD_ROOM, room };
}

export const toogleItem = (item: any, type: string) => ({
  type: type,
  item
});

export const updateRooms = (payload: any, type: string) => ({
  payload,
  type
});

export const loadEnquiriesRequest = () => {
  console.log("post");
  return { type: "MAKE_ENQUIRY_REQUEST" };
};
export const loadEnquirieSuccess = (posts: any) => ({
  type: "MAKE_ENQUIRY_SUCCESS",
  payload: posts
});
export const loadEnquirieFailure = (error: any) => ({
  type: "MAKE_ENQUIRY_FAILURE",
  payload: error,
  error: true
});
// export const sendEquiry = (payload: any, type: string) => ({
//   payload,
//   type
// });

export const postEquiry = (equiry: any) => {
  console.log("posting", equiry);
  return (dispatch: any) => {
    dispatch(loadEnquiriesRequest());
    axios
      .post("/enquiry", equiry)
      .then(function(response: any) {
        dispatch(loadEnquirieSuccess(response.data));
        console.log(response);
      })
      .catch(function(error: any) {
        dispatch(loadEnquirieFailure(error));
        console.log(error);
      });
  };
};
