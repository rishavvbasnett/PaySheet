import axios from 'axios'

const url = "http://localhost:3001/api/paysheet"

async function fetchRecords() {
  const response = await axios.get(url)
  const records = await response.data
  return records
}

const api = {
  fetchRecords: fetchRecords
}

export default api