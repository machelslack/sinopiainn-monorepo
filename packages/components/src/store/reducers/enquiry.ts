import initialState from "../initial-state";

export default (state = {}, { payload, type } = {} as any) => {
  switch (type) {
    case "MAKE_ENQUIRY_REQUEST":
      return {
        ...state,
        enquiry_loading: true
      };
    case "MAKE_ENQUIRY_SUCCESS":
      return {
        ...state,
        enquiry_loading: false,
        enquiry: payload
      };
    case "MAKE_ENQUIRY_FAILURE":
      return {
        ...state,
        enquiry_loading: false,
        enquiry_error: payload
      };
    default:
      return state;
  }
};
