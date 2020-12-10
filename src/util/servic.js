


import headers from "./headers";
import cookie from "react-cookie";
import { LoggedIn, EmptyUserProfile } from "../actions/login";
import CallService from "./callService";


UserService.getWithData = (url = "", data, disp = null) => {
    projectUrl.dispatch = disp;
    let apiHeaders = headers.get();
    let full_url = new URL(projectUrl.url + url);
    Object.keys(data).forEach(function (key) {
        full_url.searchParams.append(key, data[key]);
    });
    return fetch(full_url, {
        method: "GET",
        headers: apiHeaders,
        credentials: "same-origin"
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(function (json) {
            return json.data;
        })
        .catch(function (ex) {
            throw new Error(ex);
        });
};


const UserService = (function (props) {
    let UserService = {};
    const projectUrl = {
        url:
            process.env.NODE_ENV === "development"
                ? "http://liquornearme.test/api"    
                : "/api",
        dispatch: null
    };

    function checkStatus(response) {
        if (response.status === 401) {
            cookie.remove("Authorization");
            projectUrl.dispatch(EmptyUserProfile());
            projectUrl.dispatch(LoggedIn(false));
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


    UserService.paymentRequest = (url = "", data = {}, disp) => {
        projectUrl.dispatch = disp;
      
        return fetch(projectUrl.url + url, {
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            credentials: "same-origin",
            body: JSON.stringify(data)
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(function (json) {
                if (json.errors || (json.data && json.data.errors)) {
                    const errors = json.errors ? json.errors : json.data.errors;
                    return {
                        ...errors,
                        hasError: true
                    };
                }
                return {
                    ...json.data
                };
            })
            .catch(function (err) {
                throw new Error(err);
            });
    };

    // UserService.changeTwoFa = (url = "", data = {}, disp) => {
    //     projectUrl.dispatch = disp;
    //     // let apiHeaders = headers.get();
    //     return fetch(projectUrl.url + url, {
    //         method: "POST",
    //         headers:{'Content-Type': 'application/json'},
    //         credentials: "same-origin",
    //         body: JSON.stringify(data)
    //     })
    //         .then(checkStatus)
    //         .then(parseJSON)
    //         .then(function (json) {
    //             if (json.errors || (json.data && json.data.errors)) {
    //                 const errors = json.errors ? json.errors : json.data.errors;
    //                 return {
    //                     ...errors,
    //                     hasError: true
    //                 };
    //             }
    //             return {
    //                 ...json.data
    //             };
    //         })
    //         .catch(function (err) {
    //             throw new Error(err);
    //         });
    // };
    UserService.get = (url = "", disp = null) => {
        projectUrl.dispatch = disp;
        // let apiHeaders = headers.get();
        return fetch(projectUrl.url + url, {
            method: "GET",
            headers:{'Content-Type': 'application/json'},
            credentials: "same-origin"
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(function (json) {
                return json.data;
            })
            .catch(function (ex) {
                throw new Error(ex);
            });
    };


    // UserService.put = (url = "", data = {}, disp) => {
    //     projectUrl.dispatch = disp;
    //     // let apiHeaders = headers.get();
    //     return fetch(projectUrl.url + url, {
    //         method: "PUT",
    //         headers:{'Content-Type': 'application/json'},
    //         credentials: "same-origin",
    //         body: JSON.stringify(data)
    //     })
    //         .then(checkStatus)
    //         .then(parseJSON)
    //         .then(function (json) {
    //             if (json.errors || (json.data && json.data.errors)) {
    //                 const errors = json.errors ? json.errors : json.data.errors;
    //                 return {
    //                     ...errors,
    //                     hasError: true
    //                 };
    //             }
    //             return {
    //                 data: {
    //                     ...json.data
    //                 }
    //             };
    //         })
    //         .catch(function (ex) {
    //             throw new Error(ex);
    //         });
    // };
    UserService.post = (url = "", data = {}, disp) => {
        projectUrl.dispatch = disp;
        
        return fetch(projectUrl.url + url, {
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            credentials: "same-origin",
            body: JSON.stringify(data)
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(function (json) {
                if (json.errors || (json.data && json.data.errors)) {
                    const errors = json.errors ? json.errors : json.data.errors;
                    return {
                        ...errors,
                        hasError: true
                    };
                }
                return {
                    ...json.data
                };
            })
            .catch(function (ex) {
                throw new Error(ex);
            });
    };
    // UserService.postFiles = (url = "", data = {}, disp) => {
    //     projectUrl.dispatch = disp;
        
    //     delete apiHeaders["Content-Type"];
    //     return fetch(projectUrl.url + url, {
    //         method: "POST",
    //         headers:{'Content-Type': 'application/json'},
    //         body: data
    //     })
    //         .then(checkStatus)
    //         .then(parseJSON)
    //         .then(function (json) {
    //             if (json.errors || (json.data && json.data.errors)) {
    //                 const errors = json.errors ? json.errors : json.data.errors;
    //                 return {
    //                     ...errors,
    //                     hasError: true
    //                 };
    //             }
    //             return {
    //                 ...json.data
    //             };
    //         })
    //         .catch(function (ex) {
    //             throw new Error(ex);
    //         });
    // };
    return UserService;
})();

export default UserService;