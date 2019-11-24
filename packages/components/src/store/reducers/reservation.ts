import initialState from "../initial-state";

export default (
  state = initialState().reservationId,
  { payload, type } = {} as any
) => {
  return state;
};
