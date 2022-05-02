import axios from "axios";

const domain = "http://localhost:8888/";


const api = axios.create({
  baseURL: `${domain}`,

  // baseURL: `${domain}/api/`,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

async function GET(url, params) {
  try {
    const response = await api.get(url, params);
    return response.data;
  }
  catch (error) {
    return Promise.reject(error);
  }
}
async function POST(url, params) {
  try {
    const response = await api.post(url, params);
    return response.data;
  }
  catch (error) {
    return Promise.reject(error);
  }
}
async function PUT(url, params) {
  try {
    const response = await api.put(url, params);
    return response.data;
  }
  catch (error) {
    return Promise.reject(error);
  }
}
export { GET, POST, PUT };
