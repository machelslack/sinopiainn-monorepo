import initialState from "../initial-state";

export default (
  state = initialState().rooms,
  { payload, type } = {} as any
) => {
  return state;
};
