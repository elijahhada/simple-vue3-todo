import axios from "axios"

export default axios.create({
  baseURL: "http://todos.test/api",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
})
