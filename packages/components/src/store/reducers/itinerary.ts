import initialState from "../initial-state";

export default (
  state = initialState().itinerary,
  { payload, type } = {} as any
) => {
  switch (type) {
    case "ADD_ROOMS":
      return {
        ...state
      };
    case "REMOVE_ROOMS":
      return {
        ...state
      };
    case "ADD_OFFER":
      return {
        ...state
      };
    case "REMOVE_OFFER":
      return {
        ...state
      };
    case "ADD_AMENITY":
      return {
        ...state
      };
    case "REMOVE_AMENITY":
      return {
        ...state
      };
    default:
      return state;
  }
};
