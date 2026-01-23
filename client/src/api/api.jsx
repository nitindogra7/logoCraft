import axios from "axios";

const Api = axios.create({
    baseURL: "http://192.168.1.12:3000",
    withCredentials: true
})
export default Api