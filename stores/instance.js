import axios from "axios";

export const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

// export const instance = axios.create({
//   baseURL: "http://192.168.100.35:80/api/"
// });
