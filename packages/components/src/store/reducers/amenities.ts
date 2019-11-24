import initialState from "../initial-state";

export default (
  state = initialState().amenities,
  { payload, type } = {} as any
) => {
  return state;
};
