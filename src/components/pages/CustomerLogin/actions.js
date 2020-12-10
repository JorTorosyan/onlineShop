import { FetchApi } from '../../../util/fetchApi';
import { resendEmailUrl } from '../../../util/service-urls'




export const getLoginData = data => async dispatch => {
   
 dispatch({
        type: 'AUTH_START'
    });
    const res = await FetchApi.post('http://liquornearme.test/api/login', data)
     try {
         dispatch({
            type: 'AUTH_SUCCESS',
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: 'AUTH_FILED',
            error: { message: "Something went wrong" }
        });
    }
}

// error: { message: "Something went wrong" }