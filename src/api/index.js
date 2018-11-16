import axios from 'axios';

const apiURI = process.env.REACT_APP_API_URI;

function getExpenses() {
  return axios.get(`${apiURI}/expenses`)
};

function addExpense(expense) {
  return axios.post(`${apiURI}/expenses`, expense);
}

export {
  getExpenses,
  addExpense
}