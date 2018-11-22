import axios from "axios";
import store from "../store";
import { startLoading, stopLoading } from "../actions/loaderActions";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  timeout: 2000
});

api.interceptors.request.use(
  function(config) {
    store.dispatch(startLoading());
    return config;
  },
  function(error) {
    store.dispatch(stopLoading());
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function(response) {
    store.dispatch(stopLoading());
    return response;
  },
  function(error) {
    store.dispatch(stopLoading());
    return Promise.reject(error);
  }
);

function getExpenses() {
  return api.get("/expenses");
}

function addExpense(expense) {
  return axios.post("/expenses", expense);
}

async function getExpense(id) {
  const resp = await axios.get(`expenses/${id}`);
  return resp.data;
}

export { getExpenses, addExpense, getExpense };
