import headers from "./headers";
import { userUrl } from "../config";
import {LoggedIn,UserProfile} from "../actions/login";
import { CreateCart } from "../actions/cart";
import cookie from "react-cookie";
const UserService = (function(props) {
    let UserService = {};
    const projectUrl = {
        url: userUrl,
        dispatch:null
    };

    function checkStatus(response){
        if (response.status === 401) {
            cookie.remove("Authorization");
            projectUrl.dispatch(UserProfile());
            projectUrl.dispatch(LoggedIn(false));
            projectUrl.dispatch(CreateCart({}))
        }
        if (
            (response.status >= 200 && response.status < 300) ||
            response.status === 422 ||
            response.status === 404
        ) {
            return response;
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }
    function parseJSON(response) {
        return response.json();
    }
    UserService.post = (url = "", data= {}, disp) => {
        let apiheaders = headers.get();
        projectUrl.dispatch = disp;
        return fetch(projectUrl.url + url,{
            headers:apiheaders,
            method:"POST",
            credentials:"same-origin",
            body:JSON.stringify(data)
            }
            )
            .then(checkStatus)
            .then(parseJSON)
            .then(function(response) {
                if(response.data && response.data.errors){
                    return response.data;
                }else if(response.errors){
                    return response;
                }
                let data = {...response.data};
                delete response.data;
                data = {
                    ...data,
                    ...response
                }
                return data;
            })
            .catch(function(ex) {
                throw new Error(ex);
            });
    };
    UserService.get = (url = "", disp) => {
        let apiHeaders = headers.get();
        projectUrl.dispatch = disp;
        return fetch(projectUrl.url + url, {
            method: "GET",
            headers: apiHeaders,
            credentials: "same-origin"
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(function (json) {
                return json;
            })
            .catch(function (ex) {
                throw new Error(ex);
            });
    };
    return UserService;
})();
export default UserService;