import initialState from "../initial-state";

export default (
  state = initialState().rooms,
  { payload, type } = {} as any
) => {
  switch (type) {
    case "UPDATE_BOOKING":
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
