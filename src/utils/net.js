import axios from 'axios';
import Qs from "qs";

export function get_token() {
  return localStorage.getItem("token");
}
export function save_token(response) {
  localStorage.setItem("token", response.data.extend.token);
}
export function login(form) {
  return axios.post("login", form, {
    transformRequest: [
      function (data) {
        return Qs.stringify(data);
      },
    ],
  });
}
export function get_with_token(url) {
  return axios.get(url, {
    headers: {
      "token": get_token(),
    },
  });
}
export function post_with_token(url, parmas) {
  return axios.post(url, parmas, {
    headers: {
      "token": get_token(),
    },
  });
}
export function test() {
  post_with_token("orderItem/cart", {
    items: [1, 2, 3],
    id: "123"
  }).then((res) => console.log(res));
}