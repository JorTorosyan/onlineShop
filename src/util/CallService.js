import headers from "./headers";
import { url } from "../config";

const CallService = (function (props) {
    let CallService = {};
    const projectUrl = {
        url: url
    };
    const allowedCodes = [200,20]
    function checkStatus(response) {
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
    CallService.login = (url = "", data = {}) => {
        let apiHeaders = headers.get();
        let token = null;
        return fetch(projectUrl.url + url, {
            method: "POST",
            headers: apiHeaders,
            credentials: "same-origin",
            body: JSON.stringify(data)
        })
            .then(checkStatus)
            .then(function (response) {
                token = response.headers.get("Authorization");
                return response.json();
            })
            .then(function (json) {
                if (json.errors || (json.data && json.data.errors)) {
                    const errors = json.errors ? json.errors : json.data.errors;
                    return {
                        ...errors,
                        hasError: true
                    };
                }
                return {
                    ...json,
                    token: token
                };
            })
            .catch(function (ex) {
                throw new Error(ex);
            });
    };

    CallService.authorization = (url = "") => {
        const apiHeaders = headers.get();
        return fetch(projectUrl.url + url, {
            method: "GET",
            headers: apiHeaders,
            credentials: "same-origin"
        })
            .then(parseJSON)
            .then(function (json) {
                return json;
            })
            .catch(function (ex) {
                throw new Error(ex);
            });
    };
    CallService.get = (url = "") => {
        let apiHeaders = headers.get();
        return fetch(projectUrl.url + url, {
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
    CallService.post = (url = "", data = {}) => {
        let apiHeaders = headers.get();
        return fetch(projectUrl.url + url, {
            method: "POST",
            headers: apiHeaders,
            credentials: "same-origin",
            body: JSON.stringify(data)
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(function (json) {
                if (json.data && json.data.errors) {
                    return json.data;
                } else if (json.errors) {
                    return json;
                }
                return json.data;
            })
            .catch(function (ex) {
                throw new Error(ex);
            });
    };
    CallService.put = (url = "", data = {}) => {
        let apiHeaders = headers.get();
        return fetch(projectUrl.url + url, {
            method: "PUT",
            headers: apiHeaders,
            credentials: "same-origin",
            body: JSON.stringify(data)
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(function (json) {
                if (json.data && json.data.errors) {
                    return json.data;
                } else if (json.errors) {
                    return json;
                }
                return json.data;
            })
            .catch(function (ex) {
                throw new Error(ex);
            });
    };

    CallService.logout = () => {
        let apiHeaders = headers.get();
        return fetch(projectUrl.url + '/auth/logout', {
            method: "POST",
            headers: apiHeaders,
            credentials: "same-origin",
            body: JSON.stringify({})
        })
            .then(parseJSON)
            .then(function (json) {
                if (json.data && json.data.errors) {
                    return json.data;
                } else if (json.errors) {
                    return json;
                }
                return json.data;
            })
            .catch(function (ex) {
                throw new Error(ex);
            });
    };
    return CallService;
})();

export default CallService;
