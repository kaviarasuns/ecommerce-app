import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const RENDER_URL = "https://ecom-api-whnv.onrender.com/api";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWJiZmQ5MTIxODY1ZWZjYzU0OTY4NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDMwNTg2NSwiZXhwIjoxNjYwNTY1MDY1fQ.K10Wyron6-zZB1kWOEpbyMOzn_8ZWtOeSKCXi1vtmGg";

export const publicRequest = axios.create({
  baseURL: RENDER_URL,
});

export const userRequest = axios.create({
  baseURL: RENDER_URL,
  header: { token: `Bearer ${TOKEN}` },
});
