import axios from 'axios';

class BaseApi {
  API_URL = `https://jsonplaceholder.cypress.io`;

  async get(url) {
    return await axios.get(`${this.API_URL}${url}`);
  }

  // async post(url, body: object = {}) {
  //     return await axios.post(`${this.API_URL}${url}`,body ,{
  //         headers: {
  //             'Authorization': await _retrieveData('user_token') ?? ''
  //         }});
  // }
  //
  // async delete(url: string) {
  //     return await axios.delete(`${this.API_URL}${url}`,{
  //         headers: {
  //             'Authorization': await _retrieveData('user_token') ?? ''
  //         }});
  // }
  //
  // async patch(url: string, body: object = {}) {
  //     return await axios.patch(`${this.API_URL}${url}`,body ,{
  //         headers: {
  //             'Authorization': await _retrieveData('user_token') ?? ''
  //         }});
  // }
}

export default BaseApi;
