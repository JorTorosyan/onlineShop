import {
  EMPTY_USER_PROFILE,
  LOGGED_IN,
  USER_PROFILE,
  HEADER_FOOTER_NEEDED_CHANGE,
  ADDRESS_EXISTS_CHANGE
} from "./actionTypes/index";

/**
 * @description User Logged in state
 * @param {Object} message
 * @returns {Object} new State
 */
export const LoggedIn = message => {
  return {
    type: LOGGED_IN,
    payload: message
  };
};

/**
 * @description User Logged in state
 * @param {Object} profile
 * @returns {Object} new State
 */
export const UserProfile = profile => {
  return {
    type: USER_PROFILE,
    payload: profile
  };
};

/**
 * @description User Logged in state
 * @param {Object} profile
 * @returns {Object} new State
 */
export const EmptyUserProfile = profile => {
  return {
    type: EMPTY_USER_PROFILE
  };
};

export const HeaderFooterNeeded = route => {
  return {
    type: HEADER_FOOTER_NEEDED_CHANGE,
    payload: route
  };
};

export const AddressExistsChange = value => {
  console.log(value);
  return {
    type: ADDRESS_EXISTS_CHANGE,
    payload: value
  };
};
