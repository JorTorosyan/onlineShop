export class FetchApi {
  static async post(path, data, options = {}) {
    return await FetchApi.request(path, 'POST', data, options);
  }

  static async get(path, data, options = {}) {
    return await FetchApi.request(path, 'GET', data, options);
  }

  static async put(path, data, options = {}) {
    return await FetchApi.request(path, 'PUT', data, options);
  }

  static async patch(path, data, options = {}) {
    return await FetchApi.request(path, 'PATCH', data, options);
  }

  static async delete(path, data, options = {}) {
    return await FetchApi.request(path, 'DELETE', data, options);
  }

  static async request(path, method, data) {
  
 let token = localStorage.getItem('access_token');
    let headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token,
    });
    // headers.append('Authentication', `Bearer ${token}`); 
    const myInit = {
      method,
      headers,
      body: JSON.stringify(data),
    };
   return await fetch(`${path}`, myInit).then(async response => {
     token = response.headers.get('Authorization')
    localStorage.setItem('token', token)
  try {
        const json = await response.json();
if ((response.status >= 200 && response.status < 300) ||
        response.status === 422 || response.status === 404) {
          return Promise.resolve(json);
        }
        else {
          return Promise.reject(json);
        }
      }
      catch (e) {
        return Promise.reject(e);
      }
    }).catch(e => {
      return Promise.reject(e);
    })
  }
}


// let sendReq = (ev) => {
//   let url = 'https://jsonplaceholder.typicode.com/posts';
//   let token = JSON.parse(sessionStorage.getItem('MyUniqueUserToken'));

//   let h = new Headers();
//   h.append('Authentication', `Bearer ${token}`);

//   let req = new Request(url, {
//       method: 'GET',
//       mode: 'cors',
//       headers: h
//   });
//   fetch(req)
//       .then(resp => resp.json())
//       .then(data => {
//           console.log(data[0]);
//       })
//       .catch(err => {
//           console.error(err.message);
//       })
// }