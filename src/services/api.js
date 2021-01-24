import axios from "axios";

axios.defaults.validateStatus = code => code < 500;

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const apiToken = axios.create({
  baseURL: process.env.REACT_APP_APITOKEN,
});
