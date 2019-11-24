import initialState from "../initial-state";

export default (
  state = initialState().hotel,
  { payload, type } = {} as any
) => {
  return state;
};
