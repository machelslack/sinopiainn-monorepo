import initialState from "../initial-state";

export default (state = {}, { payload, type } = {} as any) => {
  switch (type) {
    case "MAKE_ENQUIRY_REQUEST":
      return {
        enquiry_loading: true
      };
    case "MAKE_ENQUIRY_SUCCESS":
      console.log('🍻',payload)
      return {
       ...payload
      };
    case "MAKE_ENQUIRY_FAILURE":
      return {
        ...payload
      };
    default:
      return state;
  }
};
