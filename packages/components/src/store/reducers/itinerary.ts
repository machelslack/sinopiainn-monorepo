import initialState from "../initial-state";

export default (
  state = initialState().itinerary,
  { payload, type } = {} as any
) => {
  switch (type) {
    case "TOGGLE_ITEMS":
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
