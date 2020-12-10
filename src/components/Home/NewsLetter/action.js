import { FetchApi } from '../../../util/fetchApi';
import { resendEmailUrl } from '../../../util/service-urls';
// import { categories } from '../../../util/service-urls'



export const createSubscriptions = data => async dispatch => {
    dispatch({
        type: 'SUBS_CREATE_START'
    });
    const res = await FetchApi.post(resendEmailUrl, data);
    try {
        dispatch({
            type: 'SUBS_CREATE_SUCCESS',
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: 'SUBS_CREATE_FAILED',
            error: { message: "Something went wrong" }
        });
    }
};

export const deleteSubscriptionsMessage = () => {
    return ({ type: 'DELETE_SUBS_MESSAGE' });
};
