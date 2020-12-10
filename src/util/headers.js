import cookie from "react-cookie";

const Headers = (function() {
    let Headers = {};
    Headers.get = () => {
        let loadCookie = cookie.load("Authorization");
        return {
            "Content-Type": "application/json",
            Authorization: loadCookie
        };
    };
    return Headers;
})();

export default Headers;