import {
  EMPTY_USER_PROFILE,
  LOGGED_IN,
  USER_PROFILE,
  HEADER_FOOTER_NEEDED_CHANGE,
  ADDRESS_EXISTS_CHANGE
} from "../actions/actionTypes/";

export const UserReducer = (state = { profile: { addressExists: false }, }, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        login: action.payload
      };
    case USER_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.payload
        }
      };
    case EMPTY_USER_PROFILE:
      return {};
    case HEADER_FOOTER_NEEDED_CHANGE:
      return {
        ...state,
        headerFooterNeeded: action.payload
      };
    case ADDRESS_EXISTS_CHANGE:
      return {
        ...state,
        profile: {
          ...state.profile,
          addressExists: action.payload
        }
      };
    default:
      return state;
  }
};

// export default UserReducer;
