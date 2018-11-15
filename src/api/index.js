import axios from 'axios';

function getExpenses() {
  return axios.get('http://localhost:4000/expenses')
};

export {
  getExpenses
}