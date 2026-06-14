import axios from "axios";

const url = "http://localhost:3001/api/paysheet";

async function fetchRecords() {
  const response = await axios.get(url);
  const records = await response.data;
  return records;
}

async function postPaycheck(paycheck) {
  const response = await axios.post(url, paycheck);
  const savedPaycheck = await response.data;
  return savedPaycheck;
}

async function updatePaycheck(paycheckId, paycheck) {
  const response = await axios.put(`${url}/${paycheckId}`, paycheck);
  const updatedPaycheck = await response.data;
  return updatedPaycheck;
}

async function deletePaycheck(paycheckId) {
  const response = await axios.delete(`${url}/${paycheckId}`);
  const deletedPaycheck = await response.data;
  return deletedPaycheck;
}

const api = {
  fetchRecords,
  postPaycheck,
  updatePaycheck,
  deletePaycheck,
};

export default api;
