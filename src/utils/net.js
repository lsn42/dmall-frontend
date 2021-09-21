import axios from 'axios';
import Qs from "qs";

axios.defaults.baseURL = "/api";

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
export function get_advertisements() {
  return axios.get("ad");
}
export function get_categories() {
  return axios.get("category/productCategories");
}
export function get_floors() {
  return axios.get("product/findProductsByCategory");
}
export function get_all_product_by_first_category_id(id) {
  let url = "product/findAllByCategory/first/" + id;
  return axios.get(url);
}
export function get_product(id) {
  let url = "/product/getProductById/" + id;
  return axios.get(url);
}