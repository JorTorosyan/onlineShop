import { APP_READY } from "./actionTypes";

/**
 * @description App was ready
 * @returns {Object} new State
 */
export const AppReady = () => {
  return {
    type: APP_READY
  };
};
