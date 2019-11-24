import initialState from "../initial-state";

export default (
  state = initialState().offers,
  { payload, type } = {} as any
) => {
  return state;
};
